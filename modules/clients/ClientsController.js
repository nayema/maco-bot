const Client = require('./Client')

class ClientsController {
  static async getClients (req, res) {
    const clients = await Client.query()
    return res.send(clients)
  }
}

module.exports = ClientsController
