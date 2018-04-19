const Product = require('./Product')

class ProductsController {
  static async getAll (req, res) {
    const products = await Product.query().eager('client')
    return res.send(products)
  }

  static async getDetails (req, res) {
    const products = await Product
      .query()
      .eager('[client, apis]')
      .where('id', req.params['id'])
    return res.send(products[0])
  }

  static async add (req, res) {
    const product = await Product
      .query()
      .insert({
        'name': req.body['name'],
        'client_id': req.body['client_id']
      })
    return res.send(product)
  }

  static async update (req, res) {
    await Product
      .query()
      .update({
        'name': req.body['name'],
        'client_id': req.body['client_id']
      })
      .where('id', req.body['id'])
    return res.end()
  }

  static async remove (req, res) {
    await Product
      .query()
      .delete()
      .where('id', req.body['id'])
    return res.end()
  }

  static async addApi (req, res) {
    const product = await Product.query().findById(req.params['id'])
    const api = await product.$relatedQuery('apis').relate({ 'id': req.body['id'] })
    return res.send(api)
  }

  static async removeApi (req, res) {
    const product = await Product.query().findById(req.params['id'])
    await product.$relatedQuery('apis').unrelate().where('id', req.body['id'])
    return res.send(product)
  }
}

module.exports = ProductsController
