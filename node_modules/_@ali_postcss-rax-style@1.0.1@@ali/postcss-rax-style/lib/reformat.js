/*
 *@ 遇到padding,margin等属性需要拆分成单条属性
 */
const postcss = require('postcss');
const attrConfig = ['padding', 'margin', 'border', 'border-radius'];
const directConfig = {
  1: [0, 0, 0, 0],
  2: [0, 1, 0, 1],
  3: [0, 1, 1, 2],
  4: [0, 1, 2, 3]
};

function _WrapperProp(key, value) {
  let o = {}
  o['prop'] = key;
  o['value'] = value;
  return o;
}

function _AddPropsForDecl(rule, options) {
  for (let item in options) {
    const decl = postcss.decl(_WrapperProp(item, options[item]));
    rule.append(decl);
  }
}

function _InitAttrOptions(key) {
  let options = {};
  options[`${key}-top`] = null;
  options[`${key}-right`] = null;
  options[`${key}-bottom`] = null;
  options[`${key}-left`] = null;
  return options;
}

function _CalculateAttrValue(options, len, result) {
  let ret = {};
  let direct = directConfig[len];
  Object.keys(options).forEach(function(item, index) {
    ret[item] = result[direct[index]];
  });
  return ret;
}
module.exports = reformatAttr = (root, result) => {
  for (let key of attrConfig) {
    // border-radius额外处理
    if (key == 'border-radius') {

    } else {
      root.walkDecls(key, decl => {
        let parent = decl.parent;
        let ret = decl.value.split(" ");
        let len = ret.length;
        decl.remove();
        //判断decl值的个数
        let options = _InitAttrOptions(key);
        options = _CalculateAttrValue(options, len, ret);
        _AddPropsForDecl(parent, options)
      })
    }
  }
}