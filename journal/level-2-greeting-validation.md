# Level 2 振り返り: 挨拶関数の入力検証

## 実施日

2026-09-26

## 関連Issue / Pull Request

- Issue: [#3](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/3)
- Pull Request: [#4](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/4)

## 課題の評価

- 粒度と難易度: ちょうどよい
- 使用技術: JavaScript、Markdown
- 変更対象: 既存の挨拶関数、テスト、README

## Droidへの依頼と進行

1. 既存の実装、テスト、READMEを調査した。
2. Issueで入力ルールと完了条件を定義した。
3. 実装前に変更計画を確認した。
4. 既存の正常系を維持しながら入力検証を追加した。
5. エラーケースを含む5件のテストを実行した。
6. Pull Requestの差分をレビューした。

## 役に立った点

エラーケースのテストが特に役立った。正常な入力だけでなく、空白だけの文字列や文字列以外の入力を確認することで、関数の入力ルールを具体的に理解できた。

## 検証結果

```text
node --test projects/level-1-greeting/greeting.test.js
5 tests passed
```

レビューでは、高信頼の不具合は見つからなかった。

## 次回に改善すること

テストケースを実装後に追加するだけでなく、実装計画の段階で入力パターンを整理する。正常系、境界値、エラー系を先に一覧化する。

## 次回の人間TODO

- [ ] 要件からテストケース候補を先に作る
- [ ] 正常系、境界値、エラー系を分類する
- [ ] テストの不足と重複を確認する

## 次回のDroid Tasks

- [ ] 実装前にテストケース案を提示する
- [ ] 各テストがどの要件を確認するか説明する
- [ ] 未検証の入力パターンを報告する
