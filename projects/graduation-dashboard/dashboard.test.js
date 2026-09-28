const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  buildProgressModel,
  buildDashboardModel,
  buildDashboardHtml,
  escapeHtml,
} = require('./dashboard.js');

test('進捗率を計算する', () => {
  assert.deepEqual(buildProgressModel([{ completed: true }, { completed: false }]), {
    total: 2,
    completed: 1,
    percent: 50,
  });
});

test('タスクが0件の場合は0パーセントにする', () => {
  assert.deepEqual(buildProgressModel([]), {
    total: 0,
    completed: 0,
    percent: 0,
  });
});

test('人間とDroidの進捗を別々にモデル化する', () => {
  const model = buildDashboardModel({
    humanTasks: [{ title: '確認', completed: true }],
    droidTasks: [{ title: '実装', completed: false }],
  });

  assert.equal(model.human.percent, 100);
  assert.equal(model.droid.percent, 0);
  assert.equal(model.human.tasks[0].title, '確認');
});

test('タスク名をHTMLエスケープして表示する', () => {
  const html = buildDashboardHtml({
    humanTasks: [{ title: '<script>alert(1)</script>', completed: true }],
    droidTasks: [],
  });

  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
  assert.equal(escapeHtml('"safe"'), '&quot;safe&quot;');
});

test('HTMLに2つの役割と進捗バーを含める', () => {
  const html = buildDashboardHtml({
    humanTasks: [],
    droidTasks: [{ title: 'テスト', completed: true }],
  });

  assert.match(html, /人間のTODO/);
  assert.match(html, /Droid Tasks/);
  assert.match(html, /role="progressbar"/);
  assert.match(html, /100%/);
});

test('index.htmlが必要なスクリプトとルート要素を持つ', () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

  assert.match(html, /id="dashboard"/);
  assert.match(html, /src="\.\.\/level-3-task-progress\/task-progress\.js"/);
  assert.match(html, /src="\.\/dashboard\.js"/);
});
