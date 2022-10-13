// asynchronous ead file

const { readFile } = require("fs");

console.log("First starting");

readFile( "../content/first.txt", "utf-8", (err,res) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(res);
    console.log("File read");
} );

console.log("Task complete");