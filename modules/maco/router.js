const express = require('express')
const router = express.Router()

const ClientsController = require('./ClientsController')
const ProductsController = require('./ProductsController')

router.get('/clients', ClientsController.getAll)
router.post('/clients', ClientsController.add)
router.delete('/clients', ClientsController.remove)
router.put('/clients', ClientsController.update)

router.get('/products', ProductsController.getAll)
router.post('/products', ProductsController.add)

module.exports = router
