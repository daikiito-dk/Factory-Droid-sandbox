# Level 5: 実務的な課題分解

## 基本情報

- **目的**: 調査、分解、実装、検証、エラー対応を一つの課題で行う
- **使用技術**: JavaScript、Markdown、JSON
- **想定時間**: 短時間
- **Issue**: [#9](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/9)
- **Pull Request**: [#10](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/10)
- **ブランチ**: `level-5-task-report`

## 人間のTODO

- [x] 課題分解を確認する
- [x] 既存機能の再利用方針を確認する
- [x] 正常系と異常系の検証を確認する
- [x] 失敗からの復旧を確認する
- [x] Pull Requestをレビューする
- [x] 振り返りを記録する

## DroidのTasks

- [x] 既存コードを調査する
- [x] 入力、変換、出力、検証に分解する
- [x] CLIとテストを実装する
- [x] 意図したエラーを再現する
- [x] 再検証して結果を報告する

## 成果物

- [`projects/level-5-task-report/task-report.js`](../../projects/level-5-task-report/task-report.js)
- [`projects/level-5-task-report/report-cli.js`](../../projects/level-5-task-report/report-cli.js)
- [`projects/level-5-task-report/report.test.js`](../../projects/level-5-task-report/report.test.js)
- [`projects/level-5-task-report/example-tasks.json`](../../projects/level-5-task-report/example-tasks.json)

## 検証

```bash
node --test projects/level-3-task-progress/task-progress.test.js projects/level-5-task-report/report.test.js
```

9件のテストが成功した。CLIの入力不足と不正JSONは終了コード1になり、正しいJSONで正常出力に復旧した。

## 振り返り

[Level 5の振り返り](../../journal/level-5-task-report.md)を参照する。
