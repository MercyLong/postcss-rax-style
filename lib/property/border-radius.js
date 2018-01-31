/**
 *@ 默认处理border-radius的样式
 *  {root} PostCss的根CSS树
 *  {key}    需要处理key的值
 *  PS:目前支持border-radius支持一个值
 */
const utils = require('../utils');

const borderRadius = {
  'border-top-left-radius': 0,
  'border-top-right-radius': 0,
  'border-bottom-right-radius': 0,
  'border-bottom-left-radius': 0
}
const _InitAttrOptionsForBorderRadius = (options, value) => {
  let ret = {};
  for (let key in options) {
    ret[key] = value;
  }
  return ret;
}
module.exports = (root, key) => {
  root.walkDecls(key, decl => {
    let parent = decl.parent;
    let ret = decl.value;
    decl.remove();
    //判断decl值的个数
    let options = _InitAttrOptionsForBorderRadius(borderRadius, ret);
    utils._AddPropsForDecl(parent, options)
  })
}