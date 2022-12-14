const http = require("http");

const server = http.createServer( (req, res) => {
    if(req.url === "/") {
        res.end("Home Page");
    }
    if(req.url === "/about") {
        // BLOCKING CODE  or SYNCHRONOUS
        // untill for loop finishes no code is executed
        for(let i = 0; i < 200; i++) {
            for(let j = 0; j < 200; j++) {
                console.log(`${i} ${j}`);
            }
        } 
        res.end("About Page");
    } 
    res.end("Error Page");
});

server.listen(5000, () => {
    console.log("server is listening on port 5000.....")
})