const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())



app.get("/", (req, res) => {
    res.send("hello ")
})

app.post('/api/products', (req, res) => {
    res.send("data received")
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