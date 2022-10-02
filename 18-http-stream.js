const http = require("http");
const fs = require("fs");

const server = http.createServer( (req, res) => {
    // const data = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(data);
    // read data in "chunks"

    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {  // when input data is opened, make a callback
        fileStream.pipe(res);  // .pipe() >> converts "res" to writeStream
    });
    fileStream.on("error", (err) => {
        console.log(err);
    })
});

server.listen(5000);