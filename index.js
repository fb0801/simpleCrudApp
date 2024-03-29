const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()

const Product = require('./models/product.model.js')

app.use(express.json())

//route
app.use("./api/products", productRoute)

app.get("/", (req, res) => {
    res.send("hello from API ")
})




mongoose.connect("mongodb+srv://$:$@backenddb.ff3rrfz.mongodb.net/nodeapi?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>
{
    console.log("connected")
    app.listen(3000, () => {
        console.log("running on 3000")
    })

})
.catch(() => {
console.log('connection failed')
})