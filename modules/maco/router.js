const express = require('express')
const router = express.Router()

const ClientsController = require('./ClientsController')
const ProductsController = require('./ProductsController')
const ApisController = require('./ApisController')
const EquipmentController = require('./EquipmentController')

router.get('/clients', ClientsController.getAll)
router.get('/clients/:id', ClientsController.getDetails)
router.post('/clients', ClientsController.add)
router.put('/clients', ClientsController.update)
router.delete('/clients', ClientsController.remove)

router.get('/products', ProductsController.getAll)
router.get('/products/:id', ProductsController.getDetails)
router.post('/products', ProductsController.add)
router.put('/products', ProductsController.update)
router.delete('/products', ProductsController.remove)

router.get('/apis', ApisController.getAll)
router.get('/apis/:id', ApisController.getDetails)
router.post('/apis', ApisController.add)
router.put('/apis', ApisController.update)
router.delete('/apis', ApisController.remove)

router.get('/equipment', EquipmentController.getAll)
router.post('/equipment', EquipmentController.add)
router.put('/equipment', EquipmentController.update)
router.delete('/equipment', EquipmentController.remove)

module.exports = router
