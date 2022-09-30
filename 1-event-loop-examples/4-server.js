/*   1) server first listens on port 5000(server.lsitens runs first as it is asynchronous)
     2) when req is made returns with the response "Hello world"
*/
const http = require("http");

const server = http.createServer( (req,res) => {
    console.log("request event");
    res.end("Hello world");
})

server.listen(5000, () => {
    console.log("Sever listening on port: 5000.......")
})