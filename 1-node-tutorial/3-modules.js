const names = require("./4-names");  // importing modules
const sayHi = require("./5-utils");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

const data = require("./6-alternate-export");

// import function that isn't exported
require("./noImportFunction");