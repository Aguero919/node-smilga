const express = require("express");
const app = express();

// ".use()" is used to create middleware for static files
app.use(express.static("./public-static"));

app.all("*", (req, res) => {
    res.status(404).json({ response: false, data:[] })    
})

app.listen(5000, () => {
    console.log("server starting on port 5000......")
})