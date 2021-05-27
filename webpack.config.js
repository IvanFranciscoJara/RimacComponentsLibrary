var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
// const { InjectManifest } = require('workbox-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env) => {
  // console.log('TIPO', env.TIPO, __dirname)
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index_bundle.js",
      publicPath: "/",
      // contentBase: path.join(__dirname, 'dist'),
      // publicPath: 'http://localhost:9000/',
    },
    devtool: env.TIPO === "local" ? "source-map" : false,
    // devtool: false,
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
      port: 9631,
      historyApiFallback: true,
      // contentBase: 'http://localhost:9000/',
      //  contentBase: './',
      // hot: true
    },
    node: {
      fs: "empty",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          include: path.resolve(__dirname, "src"),
          use: "babel-loader",
        },
        {
          test: /\.(jsx)$/,
          include: path.resolve(__dirname, "src"),
          use: "babel-loader",
        },
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
        { test: /\.css$/, use: ["style-loader", "css-loader", "sass-loader"] },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        // { test: /\.(gif|svg|jpg|png)$/, loader: 'file-loader' }
      ],
    },
    mode: env.TIPO === "local" ? "development" : "production",
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      // new webpack.DefinePlugin({
      //   __BACKEND_URL__: JSON.stringify(
      //     env.TIPO === 'local' ? 'http://localhost:80/' : 'https://backendeducorp.herokuapp.com/'
      //   ),
      //   __FRONEND_EDUCORP_URL__: JSON.stringify(
      //     env.TIPO === 'local' ? 'http://localhost:8080/' : 'https://master.d1n6w3k0anhzxf.amplifyapp.com/'
      //   ),
      // }),
      // new CopyPlugin({
      //   patterns: [
      //     // {
      //     //   from: path.resolve(__dirname, 'src/Archivos'),
      //     //   to: path.resolve(__dirname, 'dist/Archivos'),
      //     // },
      //     {
      //       from: path.resolve(__dirname, 'src/manifest.webmanifest'),
      //       to: path.resolve(__dirname, 'dist/manifest.webmanifest'),
      //     },
      //   ],
      // }),
    ],
  };
};
