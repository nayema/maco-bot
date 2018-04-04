const Api = require('./Api')

class ApisController {
  static async getAll (req, res) {
    const apis = await Api.query()
    return res.send(apis)
  }

  static async getDetails (req, res) {
    const apis = await Api
      .query()
      .where('id', req.params['id'])
    return res.send(apis[0])
  }

  static async add (req, res) {
    const api = await Api
      .query()
      .insert({
        'name': req.body['name'],
        'adi': req.body['adi']
      })
    return res.send(api)
  }

  static async update (req, res) {
    await Api
      .query()
      .update({
        'name': req.body['name'],
        'adi': req.body['adi']
      })
      .where('id', req.body['id'])
    return res.end()
  }

  static async remove (req, res) {
    await Api
      .query()
      .delete()
      .where('id', req.body['id'])
    return res.end()
  }
}

module.exports = ApisController
