const Model = require('../common/model')

class Product extends Model {
  static get tableName () {
    return 'products'
  }

  static get relationMappings () {
    return {
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: require('./Client'),
        join: {
          from: 'products.client_id',
          to: 'clients.id'
        }
      },
      apis: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./Api'),
        join: {
          from: 'products.id',
          through: {
            from: 'products_apis.product_id',
            to: 'products_apis.api_id'
          },
          to: 'apis.id'
        }
      }
    }
  }
}

module.exports = Product
