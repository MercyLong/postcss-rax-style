/*
 *@ 遇到padding,margin等属性需要拆分成单条属性
 */

const attrConfig = ['padding', 'margin', 'border', 'border-radius'];

module.exports = reformatAttr = (root, result) => {
  for (let key of attrConfig) {
    // border-radius额外处理
    // 
    // if (key == 'border-radius') {
    //   require('./property/border-radius')(root, key);
    // } else if (key == 'border') {
    //   require('./property/border')(root, key);
    // } else {
    //   require('./property/default')(root, key);
    // }
    switch (key) {
      case 'border':
        require('./property/border')(root, key);
      case 'border-radius':
        require('./property/border-radius')(root, key);
      default:
        require('./property/default')(root, key);
    }
  }
}