const { summarizeTaskProgress } = require('../level-3-task-progress/task-progress.js');

function buildTaskReport({ humanTasks, droidTasks }) {
  const summary = summarizeTaskProgress(humanTasks, droidTasks);

  return [
    '# Task Progress Report',
    '',
    `- 人間のTODO: ${summary.human.completed}/${summary.human.total}完了`,
    `- DroidのTasks: ${summary.droid.completed}/${summary.droid.total}完了`,
    '',
  ].join('\n');
}

module.exports = { buildTaskReport };
