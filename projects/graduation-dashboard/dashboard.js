const taskProgressModule =
  typeof module !== 'undefined' && module.exports
    ? require('../level-3-task-progress/task-progress.js')
    : window.taskProgress;

const sampleData = {
  humanTasks: [
    { title: 'Issueを確認する', completed: true },
    { title: 'Pull Requestをレビューする', completed: false },
  ],
  droidTasks: [
    { title: '実装する', completed: true },
    { title: 'テストする', completed: true },
    { title: '振り返りを記録する', completed: false },
  ],
};

function calculatePercent(completed, total) {
  return total === 0 ? 0 : Math.round((completed / total) * 100);
}

function buildProgressModel(tasks) {
  const summary = taskProgressModule.summarizeTaskProgress(tasks, []);
  return {
    total: summary.human.total,
    completed: summary.human.completed,
    percent: calculatePercent(summary.human.completed, summary.human.total),
  };
}

function buildDashboardModel({ humanTasks, droidTasks }) {
  const summary = taskProgressModule.summarizeTaskProgress(humanTasks, droidTasks);
  return {
    human: {
      ...summary.human,
      percent: calculatePercent(summary.human.completed, summary.human.total),
      tasks: humanTasks,
    },
    droid: {
      ...summary.droid,
      percent: calculatePercent(summary.droid.completed, summary.droid.total),
      tasks: droidTasks,
    },
  };
}

function escapeHtml(value) {
  const characters = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return String(value).replace(/[&<>"']/g, (character) => characters[character]);
}

function renderTaskList(tasks) {
  return tasks
    .map(
      (task) => `
        <li class="task-item">
          <span>${escapeHtml(task.title)}</span>
          <span class="task-status">${task.completed ? '完了' : '未完了'}</span>
        </li>`,
    )
    .join('');
}

function renderProgressCard(label, progress) {
  return `
    <section class="progress-card" aria-label="${escapeHtml(label)}">
      <div class="card-heading">
        <h2>${escapeHtml(label)}</h2>
        <strong>${progress.percent}%</strong>
      </div>
      <p>${progress.completed}/${progress.total}件完了</p>
      <div class="progress-track" role="progressbar" aria-label="${escapeHtml(label)}の進捗" aria-valuenow="${progress.percent}" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-value" style="width: ${progress.percent}%"></div>
      </div>
      <ul class="task-list">${renderTaskList(progress.tasks)}</ul>
    </section>`;
}

function buildDashboardHtml(data) {
  const model = buildDashboardModel(data);
  return `
    <div class="dashboard-grid">
      ${renderProgressCard('人間のTODO', model.human)}
      ${renderProgressCard('Droid Tasks', model.droid)}
    </div>`;
}

function mountDashboard(root, data = sampleData) {
  root.innerHTML = buildDashboardHtml(data);
}

const dashboardApi = {
  buildProgressModel,
  buildDashboardModel,
  buildDashboardHtml,
  escapeHtml,
  mountDashboard,
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = dashboardApi;
} else if (typeof window !== 'undefined') {
  window.graduationDashboard = dashboardApi;
  const root = document.querySelector('#dashboard');
  if (root) {
    mountDashboard(root);
  }
}
