const express = require("express");
const app = express();

const { products } = require("./data.js");

// serve home page
app.get("/", (req, res) => {
    res.send(`<h1>Home Page</h1> <a href="/api/products">Products</a>`)
})

// serve only the selected products
app.get("/api/products", (req, res) => {
    let sortedProducts = [...products];
    let resultSortedProducts = sortedProducts.map( product => {
        const { id, name, price } = product;
        return { id, name, price }
    });
    res.status(200).send(resultSortedProducts);
})

// send searched items/ "route" parameters
app.get("/api/products/:productID", (req, res) => {
    console.log(req.params);
    const { productID } = req.params;
    const id = JSON.parse(productID);

    const searchedProduct = products.filter( product => product.id === id);

    if(!searchedProduct) {
        return res.status(404).json( {status: "failure", result:[]});
    }
    return res.status(200).json(searchedProduct);
})

// query strings/ parameters
app.get("/api/v1/query", (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let newSortedProducts = [...products];

    // search
    if(search) {
        newSortedProducts = newSortedProducts.filter( product => product.name.startsWith(search))
    }
    if(limit) {
        newSortedProducts = newSortedProducts.slice(0, Number(limit));
    }
    if(newSortedProducts.length < 1) {
        return res.status(200).send( {status: true, result: []});
    }
    return res.status(200).json(newSortedProducts);
})

app.listen(5000, (req, res) => {
    console.log('server listening on port 5000.....');
})