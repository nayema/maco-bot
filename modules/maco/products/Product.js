const Model = require('../../common/model')
const Client = require('../clients/Client')

class Product extends Model {
  static get tableName () {
    return 'products'
  }

  static get relationMappings () {
    return {
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: Client,
        join: {
          from: 'products.client_id',
          to: 'clients.id'
        }
      }
    }
  }
}

module.exports = Product
