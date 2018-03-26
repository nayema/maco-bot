const Product = require('./Product')

class ProductsController {
  static async getAll (req, res) {
    const products = await Product.query().eager('client')
    return res.send(products)
  }

  static async getDetails (req, res) {
    const products = await Product
      .query()
      .eager('client')
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

  static async remove (req, res) {
    await Product
      .query()
      .delete()
      .where('id', req.body['id'])
    return res.end()
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
}

module.exports = ProductsController
