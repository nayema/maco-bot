const Model = require('../common/model')

class Api extends Model {
  static get tableName () {
    return 'apis'
  }

  static get relationMappings () {
    return {
      products: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./Product'),
        join: {
          from: 'apis.id',
          through: {
            from: 'products_apis.product_id',
            to: 'products_apis.api_id',
          },
          to: 'products.id'
        }
      }
    }
  }
}

module.exports = Api
