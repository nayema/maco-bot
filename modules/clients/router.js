const express = require('express')
const router = express.Router()

const ClientsController = require('./ClientsController')

router.get('/clients', ClientsController.getClients)
router.post('/clients', ClientsController.addClient)
router.delete('/clients', ClientsController.removeClient)

module.exports = router