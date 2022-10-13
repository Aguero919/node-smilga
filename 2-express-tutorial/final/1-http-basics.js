const http = require("http");
const { readFileSync } = require("fs");
// get all html files
const getHomePage = readFileSync("./index.html");

const server = http.createServer( (req, res) => {
    
    const url = req.url;
    if(url === "/") {
        res.writeHead(200, {"content-type":"text/html"} );
        res.write(getHomePage);
        res.end();
    }
    else if(url === "/about") {
        res.writeHead(200, {"content-type":"text/html"} );
        res.write("<h1>About Page<h1/>");
        res.end();
    }
    else {
        res.writeHead(404, {"content-type":"text/html"} );
        res.write("<h1>Resource not found!<h1/>");
        res.end();
    }

    
});

server.listen(5000);