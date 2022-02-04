const mongoose = require('mongoose')


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


const Product = mongoose.model('Producto', productSchema)


module.exports = Product
