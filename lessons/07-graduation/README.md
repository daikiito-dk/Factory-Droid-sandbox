# Level 7: 卒業課題

## 基本情報

- **目的**: 要件定義から実装、検証、CI、レビュー、記録までを一通り行う
- **使用技術**: JavaScript、HTML、CSS、Markdown、GitHub Actions
- **Issue**: [#13](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/13)
- **Pull Request**: [#14](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/14)
- **ブランチ**: `level-7-graduation-dashboard`

## 人間のTODO

- [x] 要件と課題分解を確認する
- [x] 既存機能の再利用方針を確認する
- [x] UI、テスト、CIの計画を確認する
- [x] ローカルとGitHub Actionsの検証結果を確認する
- [x] レビュー指摘を確認する
- [x] 振り返りを記録する

## DroidのTasks

- [x] 既存機能とCIを調査する
- [x] 実装計画を提案する
- [x] ダッシュボードとテストを実装する
- [x] ブラウザ互換性とアクセシビリティを修正する
- [x] CIとレビュー結果を報告する

## 成果物

- [`projects/graduation-dashboard/index.html`](../../projects/graduation-dashboard/index.html)
- [`projects/graduation-dashboard/style.css`](../../projects/graduation-dashboard/style.css)
- [`projects/graduation-dashboard/dashboard.js`](../../projects/graduation-dashboard/dashboard.js)
- [`projects/graduation-dashboard/dashboard.test.js`](../../projects/graduation-dashboard/dashboard.test.js)

## 検証

```bash
node --test projects/level-3-task-progress/task-progress.test.js projects/level-5-task-report/report.test.js projects/graduation-dashboard/dashboard.test.js
```

16件のテストとGitHub Actionsが成功した。

## 振り返り

[Level 7の振り返り](../../journal/level-7-graduation-dashboard.md)を参照する。
