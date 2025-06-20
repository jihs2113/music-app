module.exports = {
  '**/*.(ts|tsx|js)': [
    'yarn lint:fix',
    'yarn prettier:fix' // ← 스크립트 이름에 맞게 변경
  ],
  '**/*.(md|json)': ['prettier --write']
};
