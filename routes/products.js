// ./server/routes/product.js

// 1. Importaciones
const express           = require('express')
const router            = express.Router()
const productController = require('./../controllers/productController')

// 2.Ruteo (Router)
router.post('/create', productController.create)
router.get('/readall', productController.readAll)
router.get('/readone/:id', productController.readOne)
router.put('/edit/:id', productController.edit)
router.delete('/delete/:id', productController.delete)

// 3.Exportaciones
module.exports = router