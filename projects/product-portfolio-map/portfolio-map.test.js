const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const svg = fs.readFileSync(path.join(__dirname, 'portfolio-map.svg'), 'utf8');
const readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');

const products = [
  'PureStrata',
  'Openenisa',
  'TerroirSync',
  'HiveMind-UI',
  'fast-ccsds-parser',
  'OpenTeleop Mobile',
  'HydraGate',
  'DeCAD',
];

test('SVGが8製品をすべて含む', () => {
  for (const product of products) {
    assert.ok(svg.includes(product), `${product} がSVGにありません`);
  }
});

test('SVGが8枚のプロダクトカードを持つ', () => {
  const cards = svg.match(/class="card"/g) ?? [];
  assert.equal(cards.length, 8);
});

test('優先度チップがP1・P2・P3の期待数で表示される', () => {
  assert.equal(svg.split('P1 · Focus').length - 1, 3);
  assert.equal(svg.split('P2 · Validate').length - 1, 5);
  assert.equal(svg.split('P3 · Defer').length - 1, 3);
});

test('市場規模が隣接カテゴリのproxyである注記を含む', () => {
  assert.ok(svg.includes('TAM/SAM'));
  assert.ok(readme.includes('not product TAM'));
  assert.ok(readme.includes('adjacent-category estimates'));
});

test('READMEがSVGへのリンクと全製品と出典一覧を含む', () => {
  assert.ok(readme.includes('./portfolio-map.svg'));
  for (const product of products) {
    assert.ok(readme.includes(product), `${product} がREADMEにありません`);
  }
  assert.ok(readme.includes('## Sources'));
});

test('SVGがREADMEへの案内を含み閉じタグで終わる', () => {
  assert.ok(svg.includes('projects/product-portfolio-map/README.md'));
  assert.ok(svg.trim().startsWith('<svg'));
  assert.ok(svg.trim().endsWith('</svg>'));
});
