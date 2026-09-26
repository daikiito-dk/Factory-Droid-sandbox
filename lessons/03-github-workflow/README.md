# Level 3: GitHubワークフロー

## 基本情報

- **目的**: Issue、ブランチ、複数コミット、Pull Requestの関係を実践する
- **使用技術**: JavaScript、Markdown
- **想定時間**: 短時間
- **Issue**: [#5](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/5)
- **Pull Request**: [#6](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/6)
- **ブランチ**: `level-3-github-workflow`

## 人間のTODO

- [x] Issueの目的と完了条件を確認する
- [x] 実装前の計画とテストケース案を確認する
- [x] 実装コミットとドキュメントコミットを区別する
- [x] Pull Requestのコミット一覧をレビューする
- [x] 振り返りを確認する

## DroidのTasks

- [x] 既存コードとテンプレートを調査する
- [x] 実装計画を提示する
- [x] 実装とテストを1つ目のコミットにする
- [x] ドキュメントを2つ目のコミットにする
- [x] Pull Requestで変更と検証結果を説明する

## 成果物

- [`projects/level-3-task-progress/task-progress.js`](../../projects/level-3-task-progress/task-progress.js)
- [`projects/level-3-task-progress/task-progress.test.js`](../../projects/level-3-task-progress/task-progress.test.js)
- [`projects/level-3-task-progress/README.md`](../../projects/level-3-task-progress/README.md)

## GitHubワークフロー

1. Issueで目的、制約、完了条件を定義する
2. `main`から課題用ブランチを作成する
3. 実装とテストを1つ目のコミットにする
4. レッスンと振り返りを2つ目のコミットにする
5. Pull Requestでコミット単位にレビューする
6. レビュー後にマージする

## 検証

```bash
node --test projects/level-3-task-progress/task-progress.test.js
```

4件のテストが成功した。

## 振り返り

[Level 3の振り返り](../../journal/level-3-github-workflow.md)を参照する。
