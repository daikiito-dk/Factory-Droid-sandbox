# Level 3 振り返り: GitHubワークフロー

## 実施日

2026-09-26

## 関連Issue / Pull Request

- Issue: [#5](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/5)
- Pull Request: 作成予定

## 課題の目的

Issue、ブランチ、複数コミット、Pull Requestの関係を実際の課題で確認する。人間のTODOとDroid Tasksを分けて管理するため、タスクの完了数を集計するJavaScript関数を作成した。

## 実施内容

1. Issue #5で目的、制約、完了条件を定義した。
2. `level-3-github-workflow`ブランチを`main`から作成した。
3. 実装、テスト、READMEを1つ目のコミットに分ける計画を立てた。
4. `summarizeTaskProgress`と4件のテストを作成した。
5. 実装・テスト・READMEを1つ目のコミットとして反映した。
6. レッスン、振り返り、ロードマップを2つ目のコミットにする予定である。

## 検証結果

```text
node --test projects/level-3-task-progress/task-progress.test.js
4 tests passed
```

確認したケース:

- 人間とDroidの完了数
- 全件未完了
- 空配列
- 入力配列を変更しないこと

## 人間のTODO

- [x] Issueの目的、完了条件、複数コミットの方針を確認する
- [x] 実装前の計画とテストケース案を確認する
- [x] 実装とテストのコミットを分ける
- [ ] Pull Requestのコミット一覧と差分をレビューする
- [ ] 振り返りを最終確認する

## DroidのTasks

- [x] 既存のレッスンとテンプレートを調査する
- [x] データ形式、戻り値、テストケースを提案する
- [x] 実装とテストを1つ目のコミットにまとめる
- [x] README、レッスン、振り返りを2つ目のコミットにまとめる
- [ ] Pull Requestでコミットごとの役割を説明する

## 次回に改善すること


