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

module.exports = { summarizeTaskProgress };
