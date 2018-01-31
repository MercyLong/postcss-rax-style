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
const _CalculateAttrValueForDefault = (options, len, result) => {
  let ret = {};
  let direct = directConfig[len];
  Object.keys(options).forEach(function(item, index) {
    ret[item] = result[direct[index]];
  });
  return ret;
}

const _InitAttrOptions = (key, value) => {
  let options = {};
  options[`${key}-top`] = value;
  options[`${key}-right`] = value;
  options[`${key}-bottom`] = value;
  options[`${key}-left`] = value;
  return options;
}

const _AddPropsForDecl = (rule, options) => {
  for (let item in options) {
    const decl = postcss.decl(_WrapperProp(item, options[item]));
    rule.append(decl);
  }
}

module.exports = {
  _CalculateAttrValueForDefault,
  _InitAttrOptions,
  _AddPropsForDecl
}