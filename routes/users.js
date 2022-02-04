const express        = require('express')
const router         = express.Router()
const userController = require('./../controllers/userController')
const authorization  = require('./../middleware/authorization')

router.post('/create', userController.create)
router.post('/login', userController.login)
router.get('/verifytoken', authorization, userController.verifyToken)


module.exports = router
