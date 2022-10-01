// "createReadStream" reads data in chunks
// earlier in "10" and "11" data was read and stored in a variable all at once

// default reads 64kb
// last buffer - remainder
// highWaterMark - control size(control incoming data)
// const stream = createReadStream("./content/big.txt", { highWaterMark: 90000})
// const stream = createReadStream("./content/big.txt", { encoding: "utf-8" })
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {highWaterMark: 20000});  // pull data from location

// the event here is "data"
stream.on("data", (result) => {
    console.log(result);
});
stream.on("error", err => console.log(err) )  //  "error" is the event

