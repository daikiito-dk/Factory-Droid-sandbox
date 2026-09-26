# Level 2: 小さな開発

## 基本情報

- **目的**: 既存コードを調査し、機能追加とエラーケースのテストを行う
- **使用技術**: JavaScript、Markdown
- **想定時間**: 短時間
- **Issue**: [#3](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/3)
- **Pull Request**: [#4](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/4)

## 人間のTODO

- [x] 既存コードとテストを確認する
- [x] Issueの完了条件を確認する
- [x] 実装計画を確認する
- [x] 正常系とエラー系の差分を確認する
- [x] Pull Requestをレビューする
- [x] 振り返りを記録する

## DroidのTasks

- [x] 既存実装の影響範囲を調査する
- [x] 実装前の変更計画を提示する
- [x] 入力検証を追加する
- [x] エラーケースを含むテストを追加する
- [x] テスト結果と差分を報告する

## 成果物

- [`projects/level-1-greeting/greeting.js`](../../projects/level-1-greeting/greeting.js)
- [`projects/level-1-greeting/greeting.test.js`](../../projects/level-1-greeting/greeting.test.js)
- [`projects/level-1-greeting/README.md`](../../projects/level-1-greeting/README.md)

## 検証

```bash
node --test projects/level-1-greeting/greeting.test.js
```

5件のテストが成功した。Pull Requestのレビューでは、高信頼の不具合は見つからなかった。

## 振り返り

[Level 2の振り返り](../../journal/level-2-greeting-validation.md)を参照する。
