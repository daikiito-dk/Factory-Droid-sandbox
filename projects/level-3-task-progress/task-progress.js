function summarizeTasks(tasks) {
  return {
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
  };
}

function summarizeTaskProgress(humanTasks, droidTasks) {
  return {
    human: summarizeTasks(humanTasks),
    droid: summarizeTasks(droidTasks),
  };
}

const taskProgressApi = { summarizeTaskProgress };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = taskProgressApi;
} else if (typeof window !== 'undefined') {
  window.taskProgress = taskProgressApi;
}
