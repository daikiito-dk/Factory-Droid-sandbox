const test = require('node:test');
const assert = require('node:assert/strict');
const { summarizeTaskProgress } = require('./task-progress.js');

test('人間とDroidのタスク完了数を集計する', () => {
  const humanTasks = [
    { title: 'Issueを確認する', completed: true },
    { title: '差分をレビューする', completed: false },
  ];
  const droidTasks = [
    { title: '実装する', completed: true },
    { title: 'テストする', completed: true },
    { title: '報告する', completed: false },
  ];

  assert.deepEqual(summarizeTaskProgress(humanTasks, droidTasks), {
    human: { total: 2, completed: 1 },
    droid: { total: 3, completed: 2 },
  });
});

test('全件未完了のタスクを集計する', () => {
  const tasks = [
    { title: '計画する', completed: false },
    { title: '確認する', completed: false },
  ];

  assert.deepEqual(summarizeTaskProgress(tasks, tasks), {
    human: { total: 2, completed: 0 },
    droid: { total: 2, completed: 0 },
  });
});

test('空のタスク配列を集計する', () => {
  assert.deepEqual(summarizeTaskProgress([], []), {
    human: { total: 0, completed: 0 },
    droid: { total: 0, completed: 0 },
  });
});

test('入力のタスク配列を変更しない', () => {
  const humanTasks = [{ title: '確認する', completed: true }];
  const droidTasks = [{ title: '実装する', completed: false }];
  const originalHumanTasks = structuredClone(humanTasks);
  const originalDroidTasks = structuredClone(droidTasks);

  summarizeTaskProgress(humanTasks, droidTasks);

  assert.deepEqual(humanTasks, originalHumanTasks);
  assert.deepEqual(droidTasks, originalDroidTasks);
});
