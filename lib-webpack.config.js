const path = require('path');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/lib/table/table.ts',
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