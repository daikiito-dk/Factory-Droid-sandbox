# Level 1 振り返り: JavaScriptの挨拶関数

## 実施日

2026-09-26

## 関連Issue / Pull Request

- Issue: [#1](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/1)
- Pull Request: [#2](https://github.com/daikiito-dk/Factory-Droid-sandbox/pull/2)

## 課題の評価

- 粒度と難易度: ちょうどよい
- 使用技術: JavaScript、Markdown
- 形式: Issue、ブランチ、Pull Request

## Droidへの依頼と進行

1. Issueで目的、制約、完了条件を定義した。
2. `level-1-greeting`ブランチを作成した。
3. Droidが実装計画を提示し、実装前に確認した。
4. `createGreeting(name)`、テスト、READMEを作成した。
5. Node.js標準テストを実行した。
6. Pull Requestの差分をレビューした。

## 役に立った点

実装前に計画を確認したことが特に役立った。作るファイル、使う技術、テスト方法を先に確認できたため、変更範囲を理解してから実装に進めた。

## 検証結果

```text
node --test projects/level-1-greeting/greeting.test.js
2 tests passed
```

レビューでは、高信頼の不具合は見つからなかった。

## 次回に改善すること

人間が行うTODOとDroidに依頼するTasksを、レッスン本文、Issue、Pull Requestのすべてで見やすく分ける。

## 次回の人間TODO

- [ ] Issueの人間TODOを最初に確認する
- [ ] DroidのTasksと自分のTODOの重複を確認する
- [ ] PRレビュー時に役割分担の結果も確認する

## 次回のDroid Tasks

- [ ] 実装前の計画で、人間の確認箇所を明示する
- [ ] 実行したTasksと未実施のTasksを分けて報告する
- [ ] PR概要に人間の確認事項を含める
