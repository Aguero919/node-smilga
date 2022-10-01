// using the events to crete a server

const http = require("http");

const server = http.createServer();

// "on" is an event listener method
// server can use the "on" method beacuause it extends the "EventEmitter" class
server.on("request", (req, res) => {  // "request" is a http event
    res.end("event happened")
});

server.listen(5000);