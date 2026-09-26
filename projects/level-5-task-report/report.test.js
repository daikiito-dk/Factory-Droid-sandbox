const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { buildTaskReport } = require('./task-report.js');
const { runReport } = require('./report-cli.js');

const fixturePath = path.join(__dirname, 'example-tasks.json');
const cliPath = path.join(__dirname, 'report-cli.js');

test('タスク集計結果からMarkdownレポートを生成する', () => {
  const report = buildTaskReport({
    humanTasks: [{ title: '確認する', completed: true }],
    droidTasks: [
      { title: '実装する', completed: true },
      { title: '報告する', completed: false },
    ],
  });

  assert.equal(
    report,
    '# Task Progress Report\n\n- 人間のTODO: 1/1完了\n- DroidのTasks: 1/2完了\n',
  );
});

test('サンプルJSONを読み込んでレポートを生成する', () => {
  assert.equal(
    runReport(fixturePath),
    '# Task Progress Report\n\n- 人間のTODO: 1/2完了\n- DroidのTasks: 2/3完了\n',
  );
});

test('CLIが正常終了してレポートを出力する', () => {
  const result = spawnSync(process.execPath, [cliPath, fixturePath], {
    encoding: 'utf8',
  });

  assert.equal(result.status, 0);
  assert.match(result.stdout, /人間のTODO: 1\/2完了/);
  assert.equal(result.stderr, '');
});

test('入力ファイルがない場合は失敗する', () => {
  const result = spawnSync(process.execPath, [cliPath, '/tmp/missing-task-report.json'], {
    encoding: 'utf8',
  });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Error:/);
});

test('不正なJSONの場合は失敗する', () => {
  const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'task-report-'));
  const invalidPath = path.join(tempDirectory, 'invalid.json');
  fs.writeFileSync(invalidPath, '{invalid', 'utf8');

  try {
    const result = spawnSync(process.execPath, [cliPath, invalidPath], {
      encoding: 'utf8',
    });

    assert.equal(result.status, 1);
    assert.match(result.stderr, /Error:/);
  } finally {
    fs.rmSync(tempDirectory, { recursive: true, force: true });
  }
});
