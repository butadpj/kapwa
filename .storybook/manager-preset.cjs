const path = require('path');

exports.managerEntries = (entries = []) => [
  ...entries,
  path.resolve(__dirname, './manager.ts'),
];
