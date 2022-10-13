const http = require("http");

const { readFileSync, createReadStream } = require("fs");

const server = http.createServer((req, res) => {
    // const text = readFileSync("./content/big.txt", "utf-8")
    // res.end(text);
    // using "createReadStream"

    const readFileStream = createReadStream("./content/big.txt", { highWaterMark: 20000 });
    
    readFileStream.on("open", () => {
        readFileStream.pipe(res);  // ".pipe()" helps write data in chunks
    });
    readFileStream.on("error", (err) => {
        res.end(err)
    })
});

server.listen(5000)