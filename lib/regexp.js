module.exports = regRemLayout = (root, ratio) => {
  root.replaceValues(/(.*)+rem/g, { fast: 'rem' }, string => {
    let stringRulesArray = string.split(" ");
    return stringRulesArray.map((item) => {
      let value = ratio * parseFloat(item);
      return value;
    }).join(" ");
  });
}