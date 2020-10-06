module.exports = {
  entry: ['./src/main.js'],
  output: {
    filename: 'index.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  esModuleInterop: false,
};
