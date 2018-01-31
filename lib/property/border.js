/**
 *@	默认处理border的样式
 */
const utils = require('../utils');
module.exports = (root, key) => {
  root.walkDecls(key, decl => {
    let parent = decl.parent;
    // border通常有三个值
    decl.remove();
    let options = utils._InitAttrOptions(key, decl.value);
    utils._AddPropsForDecl(parent, options);
  })
}