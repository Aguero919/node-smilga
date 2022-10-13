// "asynchronously" read and write files

const { readFile, writeFile } = require("fs");  // using "destructuring"

console.log("starting")

readFile( `./content/first.txt`, "utf-8", (err, res) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(res);  // res is the file read from "./content/first.txt"
    const first = res;

    readFile(`./content/second.txt`, "utf-8", (err, res) => {
        if(err) {
            console.log(err);
            return
        }
        console.log(res);
        const second = res;

        writeFile( `./content/async-result.txt`, `Here is the result: ${first} ${second}`, (err, res) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log("done wih this task");
        })
    })
});
console.log("starting next task")