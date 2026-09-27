# Level 5: タスク進捗レポート

JSON形式のTODOデータを読み込み、Markdownレポートを標準出力へ出すCLIです。

## 実行方法

リポジトリのルートで次のコマンドを実行します。

```bash
node projects/level-5-task-report/report-cli.js projects/level-5-task-report/example-tasks.json
```

出力:

```text
# Task Progress Report

- 人間のTODO: 1/2完了
- DroidのTasks: 2/3完了
```

## 入力形式

```json
{
  "humanTasks": [{ "title": "Issueを確認する", "completed": true }],
  "droidTasks": [{ "title": "実装する", "completed": false }]
}
```

## エラー

入力ファイルを指定しない場合、ファイルが存在しない場合、不正なJSONの場合はエラーを標準エラー出力へ出し、終了コード1で終了します。

## 学習ポイント

- 既存の集計関数を再利用する
- 入力、変換、出力、検証に課題を分解する
- CLIの正常系とエラー系を検証する
