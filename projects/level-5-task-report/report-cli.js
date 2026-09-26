const fs = require('node:fs');
const { buildTaskReport } = require('./task-report.js');

function runReport(filePath) {
  if (!filePath) {
    throw new Error('入力JSONファイルを指定してください');
  }

  const input = fs.readFileSync(filePath, 'utf8');
  return buildTaskReport(JSON.parse(input));
}

if (require.main === module) {
  try {
    process.stdout.write(runReport(process.argv[2]));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
    process.exitCode = 1;
  }
}

module.exports = { runReport };
