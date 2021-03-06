const postcss = require('postcss');
const reformatAttr = require('./format');
const regRemLayout = require('./regexp');
module.exports = postcss.plugin('postcss-rax-style', function(opts) {
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