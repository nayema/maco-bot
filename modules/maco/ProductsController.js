const Product = require('./Product')
const Client = require('./Client')

class ProductsController {
  static async getAll (req, res) {
    const products = await Product.query().eager('client')
    return res.send(products)
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
}

module.exports = ProductsController
