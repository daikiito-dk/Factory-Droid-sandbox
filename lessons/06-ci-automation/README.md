# Level 6: CIと自動化

## 基本情報

- **目的**: GitHub ActionsでテストとCLI検証を自動実行する
- **使用技術**: JavaScript、Markdown、GitHub Actions YAML
- **想定時間**: 短時間
- **Issue**: [#11](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/11)
- **Pull Request**: [#12](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/12)
- **ブランチ**: `level-6-ci-automation`

## 人間のTODO

- [x] Workflowのトリガーを確認する
- [x] 権限を確認する
- [x] テストとCLIコマンドを確認する
- [x] Actions実行結果を確認する
- [x] Pull Requestをレビューする
- [x] 振り返りを記録する

## DroidのTasks

- [x] 既存の検証コマンドを調査する
- [x] 最小権限のWorkflowを提案する
- [x] Workflowを作成する
- [x] ローカルで構文とコマンドを検証する
- [x] GitHub Actionsの結果を確認する

## Workflow

Workflowは [`.github/workflows/test.yml`](../../.github/workflows/test.yml) にあります。

トリガー:

- `main`へのPush
- `main`向けPull Request

権限:

```yaml
permissions:
  contents: read
```

## 検証

GitHub Actionsで次の処理が成功した。

- Level 3・5の9件のテスト
- Level 5 CLIスモークテスト

## 振り返り

[Level 6の振り返り](../../journal/level-6-ci-automation.md)を参照する。
