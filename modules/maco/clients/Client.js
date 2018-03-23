const Model = require('../../common/model')

class Client extends Model {
  static get tableName () {
    return 'clients'
  }

  static get relationMappings () {
    const Product = require('../products/Product')
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: {
          from: 'clients.id',
          to: 'products.client_id'
        }
      }
    }
  }
}

module.exports = Client
