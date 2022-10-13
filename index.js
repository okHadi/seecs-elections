const express = require("express")
const app = express()
const port = 8080
const router = require('./route')


app.listen(port, () => console.log("Server started on port 8080"))