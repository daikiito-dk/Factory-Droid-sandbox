# Level 4 振り返り: Factory Skillの使い分け

## 実施日

2026-09-26

## 関連Issue / Pull Request

- Issue: [#7](https://github.com/daikiito-dk/Factory-Droid-sandbox/issues/7)
- Pull Request: 作成予定

## 課題の目的

既存のLevel 3コードを対象に、FactoryのSkillを目的別に使い分ける。Skillの出力をそのまま採用せず、改善の根拠を確認したうえで変更するか判断する。

## 実施したSkill

### `review`

高信頼の不具合、セキュリティ問題、契約違反、テスト不備がないかを確認した。

結果:

- 高信頼の不具合なし
- 4件のテストが成功
- READMEの実行方法と実装の動作が一致

### `simplify`

次の観点で確認した。

- 既存ユーティリティとの重複
- ヘルパーの再利用性と責務
- 冗長な状態やコピー
- 互換性レイヤーや過剰な抽象化
- 不要な計算やメモリ使用

結果:

- `summarizeTasks`は既存の共通処理と重複していない
- `summarizeTaskProgress`は内部ヘルパーを再利用している
- 現在のデータ量と呼び出し箇所では、効率上の改善は不要
- 変更が必要な高信頼の問題は見つからなかった

## 変更しない判断

今回はコードを変更しない。改善候補を無理に実装すると、根拠のない変更になり、Level 4の目的であるSkill結果の判断練習に反するため。

## 検証結果

```text
node --test projects/level-3-task-progress/task-progress.test.js
4 tests passed
```

## 人間のTODO

- [x] Skillの目的と使い分けを確認する
- [x] `review`の結果を確認し、実際の不具合か判断する
- [x] `simplify`の提案を確認し、採用範囲を決める
- [x] 不要な変更を行わないことを確認する
- [x] 振り返りを記録する

## DroidのTasks

- [x] 対象コードと関連ドキュメントを調査する
- [x] `review`で高信頼の問題だけを報告する
- [x] `simplify`で改善候補を確認する
- [x] 改善が必要な場合だけ最小修正を提案する
- [x] テストと差分の結果を報告する

## 次回に改善すること

- 目的に応じたSkillの選択理由を、実行前に明示する
- Findingごとに、採用・不採用の判断基準を記録する
