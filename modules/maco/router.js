const express = require('express')
const router = express.Router()

const ClientsController = require('./clients/ClientsController')
const ProductsController = require('./products/ProductsController')

router.get('/clients', ClientsController.getAll)
router.get('/clients/:id', ClientsController.getDetails)
router.post('/clients', ClientsController.add)
router.delete('/clients', ClientsController.remove)
router.put('/clients', ClientsController.update)

router.get('/products', ProductsController.getAll)
router.post('/products', ProductsController.add)
router.delete('/products', ProductsController.remove)
router.put('/products', ProductsController.update)

module.exports = router
