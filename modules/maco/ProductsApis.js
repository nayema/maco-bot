const Model = require('../common/model')

class ProductsApis extends Model {
  static get tableName () {
    return 'products_apis'
  }
}

module.exports = ProductsApis
