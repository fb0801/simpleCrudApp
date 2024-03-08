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
      const products =  await Product.find({})
      res.status(200).json(products)

    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.get("/api/product/:id", async (req, res) => {
    try {
            const {id} = req.params
            const product = await Product.findById(id)
            res.status(200).json(product)
    }catch (error){
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

//update product
app.put('/api/product/:id', async (req,res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product){
            return res.status(404).json({message: "product not found"})
        }
            const updatedProduct = await Product.findById(id)
            res.status(200).json(updatedProduct)
    }catch (error){
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