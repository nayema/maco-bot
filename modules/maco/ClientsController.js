const Client = require('./Client')

class ClientsController {
  static async getAll (req, res) {
    const clients = await Client.query()
    return res.send(clients)
  }

  static async add (req, res) {
    const client = await Client.query().insert({
        'name': req.body['name']
      })
    return res.send(client)
  }

  static async remove (req, res) {
    await Client
      .query()
      .delete()
      .where('id', req.body['id'])
    return res.end()
  }

  static async update (req, res) {
    await Client
      .query()
      .update({ 'name': req.body['name'] })
      .where('id', req.body['id'])
    return res.end()
  }
}

module.exports = ClientsController
