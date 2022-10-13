const express = require("express");
const { dirname } = require("path");
const app = express();

const path = require("path");

// send home Page
app.get("/", (req, res) => {
    console.log(req);
    res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

// get styles.css
app.get("/styles.css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./navbar-app/styles.css"));
});

// get browser-app.js
app.get("/browser-app.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./navbar-app/browser-app.js"));
});

// get logo.svg
app.get("/logo.svg", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./navbar-app/logo.svg"));
});


app.listen(5000, () => {
    console.log("server listening on port 5000......");
});