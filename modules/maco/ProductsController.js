const Product = require('./Product')

class ProductsController {
  static async getAll (req, res) {
    const products = await Product.query()
    return res.send(products)
  }

  static async add (req, res) {
    const product = await Product.query().insert({
        'name': req.body['name'],
        'client_id': req.body['client_id']
      })
    return res.send(product)
  }
}

module.exports = ProductsController
