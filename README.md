# Factory Droid Sandbox

Daikiが、FactoryとDroidを実際の作業で使いこなすための練習リポジトリです。

## 目的

このリポジトリでは、次の力を段階的に身につけます。

- 作業を小さな課題に分解する
- Droidに目的、制約、完了条件を伝える
- 変更内容を確認し、必要なら修正を依頼する
- テスト、レビュー、セキュリティ確認で結果を検証する
- 学んだことと判断理由をGitHubに記録する

## 基本の進め方

1. 課題の目的と完了条件を決める
2. GitHub Issueを作成し、課題用ブランチを作る
3. まず自分で作業方針を考える
4. Droidに調査、計画、実装、レビューを依頼する
5. 差分と実行結果を確認する
6. Pull Request形式でレビューする
7. 失敗や判断を `journal/` に記録する
8. 次の課題に進むか、同じ課題をやり直す

Droidに任せることと、自分で確認することを分けるのが重要です。特に、コード変更、外部サービスへの操作、データ削除、公開処理は、内容と影響を確認してから実行します。

## 学習方針

- 1課題を短時間で進める
- 使用技術はJavaScript、Markdown、HTML、CSS、JSONから始める
- 学習分野は、コード開発、Webサイト制作、自動化、ドキュメント作成、ブラウザテストの順に進める
- 各レッスンで人間のTODOとDroidのTasksを分けて管理する

## ディレクトリ

```text
.github/workflows/ CIで実行する自動チェック
lessons/   段階別の練習課題
journal/   実行結果と振り返り
projects/  練習で作る小規模プロジェクト
templates/ 課題や振り返りのテンプレート
```

## 進捗

### 現在の状態

2026-09-29時点で、Level 0からLevel 7まで完了しています。

| Level | 内容 | 状態 |
| --- | --- | --- |
| 0 | 環境と記録 | 完了 |
| 1 | Droidの基本操作 | 完了 |
| 2 | 小さな開発 | 完了 |
| 3 | GitHubワークフロー | 完了 |
| 4 | Factory Skillの使い分け | 完了 |
| 5 | 実務的な課題分解 | 完了 |
| 6 | GitHub Actionsによる自動化 | 完了 |
| 7 | 進捗ダッシュボード卒業課題 | 完了 |

### 卒業課題

人間のTODOとDroid Tasksを表示する静的Webダッシュボードを作成しました。

- [ダッシュボード](projects/graduation-dashboard/index.html)
- [卒業課題レッスン](lessons/07-graduation/README.md)
- [卒業課題の振り返り](journal/level-7-graduation-dashboard.md)
- [GitHub Actions Workflow](.github/workflows/test.yml)

### 検証状況

- Node.js標準テスト: 16件成功
- CLIスモークテスト: 成功
- ブラウザ相当のスクリプト実行: 成功
- GitHub Actions: `main`で成功
- CI権限: `contents: read`

### 次のステップ

このSandboxで学んだサイクルを、Daikiの実プロジェクトへ適用します。

1. Issueで目的、制約、完了条件を定義する
2. 人間のTODOとDroid Tasksを分ける
3. Droidに調査、計画、実装、検証を依頼する
4. GitHub ActionsとPull Requestで確認する
5. 振り返りを`journal/`に記録する

全体の計画は [ROADMAP.md](ROADMAP.md) を参照してください。
