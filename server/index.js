const express = require('express');
const path = require('path');
const app = express();

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, '../build')));

// すべてのルートリクエストを index.html に送る
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 9000ポートでサーバを起動
app.listen(9000, () => {
  console.log('Server is running on http://localhost:9000');
});
