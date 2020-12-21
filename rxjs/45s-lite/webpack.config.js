const path = require('path');

let files = {
/*
  creatingObservables: ['stopwatch'],
*/
};

let entry = Object.keys(files).reduce((prev, key) => {
  files[key].forEach(filename => {
    prev[`${key}/${filename}`] = `./${key}/${filename}.ts`
    prev[`${key}/${filename}-complete`] = `./${key}/${filename}-complete.ts`
  });
  return prev;
}, {});

entry['src/main'] = './src/main.ts';

module.exports = {
  mode: 'development',
  // defined above
  entry,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
