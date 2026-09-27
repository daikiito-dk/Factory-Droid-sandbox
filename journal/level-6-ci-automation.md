# Level 6 振り返り: GitHub Actionsでテストを自動化する

## 実施日

2026-09-27

## 関連Issue / Pull Request

- Issue: [#11](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/11)
- Pull Request: [#12](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/12)
- Actions run: [Test #36285865615](https://github.com/daikiito-dk/Factory-Droid-sandbox/actions/runs/36285865615)

## 実施内容

`.github/workflows/test.yml`を追加した。

- `main`へのPushで実行
- `main`向けPull Requestで実行
- Node.js 22を使用
- `contents: read`の最小権限
- Level 3・5のテストを実行
- Level 5 CLIのスモークテストを実行

## CI結果

- Workflow: `Test`
- Job: `test`
- 結果: 成功
- テスト: 9件成功
- CLIスモークテスト: 成功

## 人間のTODO

- [x] Workflowのトリガーと権限を確認する
- [x] 実行するテストとCLIコマンドを確認する
- [x] CIの成功結果を確認する
- [x] 失敗時のログ確認方法を確認する
- [x] Pull Requestをレビューする
- [x] 振り返りを記録する

## DroidのTasks

- [x] 既存のテストとCLI実行方法を調査する
- [x] Workflowの実行範囲と最小権限を提案する
- [x] 承認されたWorkflowだけを作成する
- [x] YAML構文とローカルコマンドを検証する
- [x] GitHub Actionsの実行結果を確認する
- [x] 失敗時の復旧方法を報告する

## 次回に改善すること

CIが失敗した場合に、ジョブ、ステップ、ログの順で原因を切り分ける手順を明確にする。
