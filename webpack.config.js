const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node", // Node.js 環境向けにビルド
  mode: "development", // または 'production'
  entry: "./server/index.js", // エントリーポイントの設定
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },

  externals: [nodeExternals()], // Node.js のネイティブモジュールをバンドルから除外
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // CSSファイルの処理を追加
      {
        test: /\.css$/,
        use: [
          "style-loader", // CSSをDOMに挿入するためのローダー
          "css-loader", // CSSをCommonJSに変換するローダー
          {
            loader: "postcss-loader", // PostCSSを使用するためのローダー
            options: {
              postcssOptions: {
                plugins: [
                  require("tailwindcss"), // Tailwind CSSを適用
                  require("autoprefixer"), // ベンダープレフィックスを自動的に追加
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // 解決するファイルの拡張子
  },
};
