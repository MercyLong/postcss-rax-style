/**
 *@	默认处理paading margin的样式
 *	{root} PostCss的根CSS树
 *	{key}	 需要处理key的值
 */
const utils = require('../utils');
module.exports = (root, key) => {
  root.walkDecls(key, decl => {
    let parent = decl.parent;
    let ret = decl.value.split(" ");
    let len = ret.length;
    decl.remove();
    //判断decl值的个数
    let options = utils._InitAttrOptions(key);
    options = utils._CalculateAttrValueForDefault(options, len, ret);
    utils._AddPropsForDecl(parent, options)
  })
}