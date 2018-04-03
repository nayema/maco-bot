const express = require('express')
const router = express.Router()

const ClientsController = require('./ClientsController')
const ProductsController = require('./ProductsController')
const EquipmentController = require('./EquipmentController')

router.get('/clients', ClientsController.getAll)
router.get('/clients/:id', ClientsController.getDetails)
router.post('/clients', ClientsController.add)
router.delete('/clients', ClientsController.remove)
router.put('/clients', ClientsController.update)

router.get('/products', ProductsController.getAll)
router.get('/products/:id', ProductsController.getDetails)
router.post('/products', ProductsController.add)
router.delete('/products', ProductsController.remove)
router.put('/products', ProductsController.update)

router.get('/equipment', EquipmentController.getAll)
router.post('/equipment', EquipmentController.add)
router.delete('/equipment', EquipmentController.remove)
router.put('/equipment', EquipmentController.update)

module.exports = router
