# Level 4: Factory Skillの使い分け

## 基本情報

- **目的**: `review`と`simplify`を使い分け、改善の要否を判断する
- **使用技術**: JavaScript、Markdown
- **想定時間**: 短時間
- **Issue**: [#7](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/7)
- **ブランチ**: `level-4-skill-practice`

## 対象

- [`projects/level-3-task-progress/task-progress.js`](../../projects/level-3-task-progress/task-progress.js)
- [`projects/level-3-task-progress/task-progress.test.js`](../../projects/level-3-task-progress/task-progress.test.js)
- [`projects/level-3-task-progress/README.md`](../../projects/level-3-task-progress/README.md)

## 人間のTODO

- [x] `review`と`simplify`の目的を確認する
- [x] Skillの結果を根拠と照合する
- [x] 改善候補ごとに採用・不採用を判断する
- [x] 改善不要の場合に変更しない
- [x] 振り返りを記録する

## DroidのTasks

- [x] 対象ファイルと関連コードを調査する
- [x] 高信頼の不具合だけを報告する
- [x] 再利用性、品質、効率を確認する
- [x] 必要な場合だけ修正を提案する
- [x] テスト結果を報告する

## 判断結果

今回は改善必須の問題が見つからなかったため、コード変更は行わない。Skillの出力を確認し、変更しない理由を記録すること自体を成果物とする。

## 検証

```bash
node --test projects/level-3-task-progress/task-progress.test.js
```

4件のテストが成功した。

## 振り返り

[Level 4の振り返り](../../journal/level-4-skill-practice.md)を参照する。
