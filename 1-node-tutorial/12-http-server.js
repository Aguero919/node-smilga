// "http" module

const http = require("http");

// create a "http server", that serves and upon request
const server = http.createServer( (req, res) => {  // "req" = incoming request from people, "res" = to sent back response
    console.log(req);
    if(req.url === "/") {
        res.end("Welcome to our home page") // "res.end" sends response and ends the connection
    }
    if(req.url === "/about") {
        res.end("Here's is about page");
    }
     res.end(`
              <h1>Oops sorry!</h1>
              <p>We can't seem to find the page you are looking for.</p>
              <a href="/">back home</a>
            `);
});

// server listening to request from port = 5000
server.listen(5000)  