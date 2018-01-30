const postcss = require('postcss');
const color = require('chalk');
const reformatAttr = require('./lib/reformat');
const regRemLayout = require('./lib/reg');
let TransferCSS = postcss.plugin('transfer-css-object', function(opts) {
  opts = opts || {};
  let ratio = opts.ratio || 40;

  // 传入配置相关的代码
  return function(root, result) {
    // 挨个检查属性的值
    reformatAttr(root, result);
    if (parseFloat(ratio)) {
      regRemLayout(root, ratio);
    }
  };
});
module.exports = {
  plugins: [
    require('autoprefixer'),
    TransferCSS({
      ratio: 40
    }),
  ]
}