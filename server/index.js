const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../src/App').default; // Reactのメインコンポーネントのパスを指定

const app = express();

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  res.send(`<html><body>${app}</body></html>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
