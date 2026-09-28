# Level 7 振り返り: 進捗ダッシュボード

## 実施日

2026-09-28

## 関連Issue / Pull Request

- Issue: [#13](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/13)
- Pull Request: [#14](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/14)
- Actions run: [Test #36394362597](https://github.com/daikiito-dk/Factory-Droid-sandbox/actions/runs/36394362597)

## 成果物

人間のTODOとDroid Tasksの進捗を表示する静的Webダッシュボードを作成した。

- 既存のタスク集計関数をブラウザとNode.jsで共有
- 進捗モデルと割合計算を実装
- 人間TODOとDroid Tasksを別カードで表示
- HTML、CSS、JavaScriptで画面を作成
- GitHub Actionsに卒業課題テストを追加

## 課題分解

1. 既存の集計関数とCIを調査した。
2. ブラウザとNode.jsの共有方法を設計した。
3. ダッシュボードのデータモデルとHTML生成を実装した。
4. 0件の進捗率、HTMLエスケープ、画面構成をテストした。
5. CIで全テストとCLIスモークテストを実行した。
6. Pull Requestレビューで問題を修正した。

既存機能を再利用しながら、Node.jsとブラウザの実行環境の違いを確認できた。

## レビューで見つかった問題と修正

### ブラウザのトップレベル変数衝突

`task-progress.js`と`dashboard.js`をクラシックスクリプトとして同じHTMLから読み込むと、同名の`const`が衝突してダッシュボードが描画されなかった。変数名を分け、Node.jsとブラウザの両方を実行するテストを追加した。

### 進捗バーのアクセシブル名

進捗バーに役割名がなかったため、`aria-label`を追加した。人間TODOとDroid Tasksをスクリーンリーダーでも区別できるようにした。

## 検証結果

```text
node --test projects/level-3-task-progress/task-progress.test.js projects/level-5-task-report/report.test.js projects/graduation-dashboard/dashboard.test.js
16 tests passed
```

- CLIスモークテスト成功
- Workflow構文確認済み
- GitHub Actions成功
- ブラウザ相当のクラシックスクリプト実行テスト成功

## 人間のTODO

- [x] 卒業課題の目的と完了条件を確認する
- [x] 既存コードの再利用とブラウザ共有方法を確認する
- [x] UI、データモデル、テストの計画を確認する
- [x] ローカルテストとCI結果を確認する
- [x] HTMLとCSSの表示内容を確認する
- [x] Pull Requestをレビューする
- [x] 卒業課題の振り返りを記録する

## DroidのTasks

- [x] 既存の集計関数、CLI、CIを調査する
- [x] 実装範囲と共有方法を提案する
- [x] 承認された計画だけ実装する
- [x] データモデル、表示、テスト、CIを更新する
- [x] テストとCIの結果を報告する
- [x] レビュー指摘を修正する

## 次回に改善すること

レビューを実装後だけに限定せず、ブラウザ実行環境、アクセシビリティ、CIでの検証方法を実装前から確認する。
