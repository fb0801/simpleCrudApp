const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()

const Product = require('./models/product.model.js')

app.use(express.json())



app.get("/", (req, res) => {
    res.send("hello from API ")
})

app.get("/api/products", async(req,res) => {

    try{

    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(res.body)
        res.status(200).json(product)
        
    }catch(error){
        res.status(500).json({message: error.message})
    }
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