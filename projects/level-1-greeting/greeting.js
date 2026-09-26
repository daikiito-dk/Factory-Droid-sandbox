function createGreeting(name) {
  if (typeof name !== 'string') {
    throw new TypeError('名前は文字列で指定してください');
  }

  const normalizedName = name.trim();
  if (normalizedName.length === 0) {
    throw new RangeError('名前は空にできません');
  }

  return `こんにちは、${normalizedName}さん！`;
}

module.exports = { createGreeting };
