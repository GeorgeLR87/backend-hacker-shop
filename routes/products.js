const express           = require('express')
const router            = express.Router()
const productController = require('./../controllers/productController')

router.post('/create', productController.create)
router.get('/readall', productController.readAll)
router.get('/readone/:id', productController.readOne)
router.put('/edit/:id', productController.edit)
router.delete('/delete/:id', productController.delete)


module.exports = router