const Client = require('./Client')

class ClientsController {
  static async getAll (req, res) {
    const clients = await Client.query().eager('products')
    return res.send(clients)
  }

  static async getDetails (req, res) {
    const clients = await Client
      .query()
      .eager('products')
      .where('id', req.params['id'])
    return res.send(clients[0])
  }

  static async add (req, res) {
    const client = await Client.query().insert({
        'name': req.body['name']
      })
    return res.send(client)
  }

  static async update (req, res) {
    await Client
      .query()
      .update({ 'name': req.body['name'] })
      .where('id', req.body['id'])
    return res.end()
  }

  static async remove (req, res) {
    await Client
      .query()
      .delete()
      .where('id', req.body['id'])
    return res.end()
  }
}

module.exports = ClientsController
