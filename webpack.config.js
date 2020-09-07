const path = require('path');

module.exports = {
  entry: './src/HeroCard.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};