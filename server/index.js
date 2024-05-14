import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import express from 'express';
import path from 'path';

/**
 Start with
  webpack --config .\webpack.config.js
  node dist/server.js
 */
const app = express();

app.use('/dist', express.static(path.join(__dirname, '../dist/public')));

app.get("/", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>TodoList with TypeScript</title>
        <script src="/dist/bundle.js" defer></script>
      </head>
      <body>
        <div id="app">${appHtml}</div>
      </body>
    </html>`;

  res.send(html);
});

app.listen(9000, () => {
  console.log("Application is running on http://localhost:9000");
});