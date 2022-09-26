//  fs = file system module

const { readFileSync, writeFileSync } = require("fs");
console.log("starting")
// "readFileSync" is to read synchronously the contents of the file.
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// "writefileSync" to create a file and write contents
writeFileSync(`./content/write-sync.txt`, 
              `Here is the result: ${first} ${second}`, {flag: 'a'});  // flag : {'a'}  >> duplicates the content

console.log("done with this task");
console.log('starting next one')