const Client = require('./Client')

class ClientsController {
  static async getClients (req, res) {
    const clients = await Client.query()
    return res.send(clients)
  }

  static async addClient (req, res) {
    const client = await Client.query().insert({
      'name': req.body['name']
    })
    return res.send(client)
  }
}

module.exports = ClientsController
