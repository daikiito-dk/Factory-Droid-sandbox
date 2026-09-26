# Level 1: 挨拶関数

名前を受け取り、日本語の挨拶を返す小さなJavaScript課題です。

## 実行方法

リポジトリのルートで次のコマンドを実行します。

```bash
node --test projects/level-1-greeting/greeting.test.js
```

## 使用例

```javascript
const { createGreeting } = require('./greeting.js');

createGreeting('Daiki');
// こんにちは、Daikiさん！
```

## 学習ポイント

- 小さな要件をJavaScript関数にする
- Node.js標準のテスト機能を使う
- 実装、テスト、説明を分けて確認する
