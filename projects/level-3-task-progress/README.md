# Level 3: タスク進捗集計

人間のTODOとDroid Tasksの完了数を集計するJavaScript課題です。

## 入力形式

タスクは、`title`と`completed`を持つオブジェクトの配列です。

```javascript
[
  { title: 'Issueを確認する', completed: true },
  { title: '差分をレビューする', completed: false }
]
```

## 使用例

```javascript
const { summarizeTaskProgress } = require('./task-progress.js');

summarizeTaskProgress(humanTasks, droidTasks);
// {
//   human: { total: 2, completed: 1 },
//   droid: { total: 3, completed: 2 }
// }
```

## 実行方法

リポジトリのルートで次のコマンドを実行します。

```bash
node --test projects/level-3-task-progress/task-progress.test.js
```

## 学習ポイント

- Issue、ブランチ、コミット、Pull Requestをつなげて使う
- 実装とドキュメントを別コミットに分ける
- 人間のTODOとDroid Tasksを同じ形式で集計する
