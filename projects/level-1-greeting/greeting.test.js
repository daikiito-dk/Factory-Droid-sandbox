const test = require('node:test');
const assert = require('node:assert/strict');
const { createGreeting } = require('./greeting.js');

test('名前を含む挨拶を返す', () => {
  assert.equal(createGreeting('Daiki'), 'こんにちは、Daikiさん！');
});

test('別の名前でも挨拶を返す', () => {
  assert.equal(createGreeting('Factory'), 'こんにちは、Factoryさん！');
});

test('名前の前後の空白を除去する', () => {
  assert.equal(createGreeting('  Daiki  '), 'こんにちは、Daikiさん！');
});

test('空白だけの名前を拒否する', () => {
  assert.throws(() => createGreeting('   '), RangeError);
});

test('文字列以外の名前を拒否する', () => {
  assert.throws(() => createGreeting(null), TypeError);
});
