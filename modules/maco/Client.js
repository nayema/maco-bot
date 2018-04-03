const Model = require('../common/model')

class Client extends Model {
  static get tableName () {
    return 'clients'
  }

  static get relationMappings () {
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: require('./Product'),
        join: {
          from: 'clients.id',
          to: 'products.client_id'
        }
      }
    }
  }
}

module.exports = Client
