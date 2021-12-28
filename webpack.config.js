const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/App.tsx",
  mode: "development",
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            cacheCompression: false
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node-modules/,
        use: [
            {
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    babelCore: '@babel/core'
                }
            }
        ]
      },
      {
        test: /\.(css|less)$/,
        loader: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx",".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};