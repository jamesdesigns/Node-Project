const express = require('express')
const bodyParser = require('body-parser')

const product = require('./routes/product.route')

const app = express()

app.use('/products', product)

const port = 5775

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`)
})

// CRUD - create. read. update. delete