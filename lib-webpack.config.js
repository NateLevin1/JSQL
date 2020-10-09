const path = require('path');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin"); // see https://paultavares.wordpress.com/2018/07/02/webpack-how-to-generate-an-es-module-bundle/ 

module.exports = {
  mode: 'production',
  entry: './src/lib/loader.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ttf$/,
        use: ['file-loader']
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'jsql.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'Table',
    libraryTarget: "var"
  },
  plugins: [
    new EsmWebpackPlugin()
  ]
};