const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()



app.get("/", (req, res) => {
    res.send("hello ")
})


mongoose.connect("mongodb+srv://$:@backenddb.ff3rrfz.mongodb.net/nodeapi?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>
{
    console.log("connected")
    app.listen(3000, () => {
        console.log("running")
    })

})
.catch(() => {
console.log('connection failed')
})