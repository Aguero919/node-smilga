// Path
const path = require("path");

// return the path separator, like slash(/)
console.log(path.sep);

// join() path

const filePath = path.join("/content/", "subFolder", "/res", "test.txt");  // joins a path of choice to get "file" of choice
console.log(filePath);

const basePath = path.basename(filePath);  // see the last filename of "choice"
console.log(basePath);

// gives the absoluet path to get the file of want
const absolute = path.resolve(__dirname, "content", "subFolder", "test.txt");  // resolve >> show absolute path from "root"
console.log(absolute);