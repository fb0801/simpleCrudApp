const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.listen(3000, () => {
    console.log("running")
})


app.get("/", (req, res) => {
    res.send("hello ")
})

mongoose.connect("mongodb+srv://f:<password>@backenddb.ff3rrfz.mongodb.net/n?retryWrites=true&w=majority&appName=BackendDB")