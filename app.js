// CRUD - create. read. update. delete
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const product = require('./routes/product.route')

const app = express()

app.use('/products', product)

const port = 5775

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`)
})

