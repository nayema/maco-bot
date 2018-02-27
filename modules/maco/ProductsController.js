const Product = require('./Product')

class ProductsController {
  static async getAll (req, res) {
    const products = await Product.query()
    return res.send(products)
  }
}

module.exports = ProductsController
