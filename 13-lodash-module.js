const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const flatItems = _.flattenDeep(items);  // "lodash" flattens or unpacks into a single array using "flattenDeep".
console.log(flatItems);