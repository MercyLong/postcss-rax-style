const postcss = require('postcss');
const color = require('chalk');
const plugin = require('@ali/postcss-rax-style');
console.log(plugin);
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@ali/postcss-rax-style')
  ]
}