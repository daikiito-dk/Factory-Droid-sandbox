const test = require('node:test');
const assert = require('node:assert/strict');
const { createGreeting } = require('./greeting.js');

test('名前を含む挨拶を返す', () => {
  assert.equal(createGreeting('Daiki'), 'こんにちは、Daikiさん！');
});

test('別の名前でも挨拶を返す', () => {
  assert.equal(createGreeting('Factory'), 'こんにちは、Factoryさん！');
});
