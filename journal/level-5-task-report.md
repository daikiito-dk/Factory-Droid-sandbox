# Level 5 振り返り: JSONからタスク進捗レポートを生成する

## 実施日

2026-09-26

## 関連Issue / Pull Request

- Issue: [#9](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/9)
- Pull Request: [#10](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/10)

## 課題の評価

- 粒度と難易度: ちょうどよい
- 使用技術: JavaScript、Markdown、JSON
- 課題形式: JSON入力、変換、CLI出力、テスト

## 課題分解

1. 既存のタスク集計関数を調査した。
2. Markdownレポート生成を分離した。
3. JSONファイルを読み込むCLIを作成した。
4. 正常系、ファイルエラー、JSONエラーをテストした。
5. 実行時エラーを再現し、正しい入力で復旧した。
6. READMEとレッスン記録を作成した。

課題を入力、変換、出力、検証に分けたことが特に役立った。

## 実装内容

- `summarizeTaskProgress`を再利用した
- `buildTaskReport`でMarkdown生成を担当した
- `runReport`でファイル読み込みとJSON解析を担当した
- CLIエラー時は標準エラー出力と終了コード1を返した

## エラー対応

入力ファイルを指定せずにCLIを実行し、エラーと終了コード1を確認した。その後、`example-tasks.json`を指定して正常なレポート出力に復旧した。不正JSONと存在しないファイルもテストで確認した。

## 検証結果

```text
node --test projects/level-3-task-progress/task-progress.test.js projects/level-5-task-report/report.test.js
9 tests passed
```

レビューでは、高信頼の不具合は見つからなかった。

## 人間のTODO

- [x] Issueの目的と課題分解を確認する
- [x] 既存集計関数の再利用方針を確認する
- [x] 実装計画とテストケースを確認する
- [x] CLIの正常終了と異常終了を確認する
- [x] 失敗時の原因と復旧手順を確認する
- [x] Pull Requestをレビューする
- [x] 振り返りを記録する

## DroidのTasks

- [x] 既存コードと関連ドキュメントを調査する
- [x] 課題を入力、変換、出力、検証に分解する
- [x] 承認された計画だけ実装する
- [x] 正常系、ファイルエラー、JSONエラーをテストする
- [x] 実行時エラーを再現して原因を報告する
- [x] 修正後に再検証する

## 次回に改善すること

人間TODOとDroid Tasksを、課題分解の段階からより見やすく並べる。
