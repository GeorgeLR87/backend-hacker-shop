// ./server/models/Product.js

//1. Importaciones
const mongoose = require('mongoose')

//2. Schema
const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    image:{
        type: String,
        require: true
    }
})

//3. Modelo
const Product = mongoose.model('Producto', productSchema)

//4 Exportacion
module.exports = Product
