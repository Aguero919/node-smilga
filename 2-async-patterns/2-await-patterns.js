const { readFile, writeFile } = require("fs");

// "utils" is a utility module in nodeJS that has many methods
// "utils" can create a promise and return based on the promise
const util = require("util");
const readFilePromise = util.promisify(readFile);  // returns a promsie, "readFile" is a parameter/placeholder for the file to be imported
const writeFilePromise = util.promisify(writeFile); // returns a promsie, "readFile" is a parameter/placeholder for the file to be imported



// promise with "async-await" or "promise-chaining"
const getData = async () => {
    try{
        const firstData = await readFilePromise("./content/first.txt");  // gets file by using the "readFilePromise" promise  
        const secondData = await readFilePromise("./content/second.txt"); // gets file by using the "readFilePromise" promise
        await writeFilePromise("./content/write-using-utils.txt", `This is wrote using "utils", ${firstData} ${secondData}`);
        console.log(`${firstData} ${secondData}`);
    }
    catch(err) {
        console.log(err); 
    }
    
}

getData();

// BELOW IS A CODE using PROMISE ONLY!!!

// const importData = (path) => {
//     return new Promise( (resolve, reject) => {
//         readFile( path,"utf-8", (err, data) => {  // gets the file path and invokes a callback
//             if(err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// };

/* importData("./content/first.txt")
   .then( res => console.log(res))
   .catch(err => console.log(err));
  */

// ctrl + / = multiple line comments

