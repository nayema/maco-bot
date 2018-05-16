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
            from: 'products_apis.api_id',
            to: 'products_apis.product_id'
          },
          to: 'products.id'
        }
      },
      equipment: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./Equipment'),
        join: {
          from: 'apis.id',
          through: {
            from: 'process_train.api_id',
            to: 'process_train.equipment_id'
          },
          to: 'equipment.id'
        }
      }
    }
  }
}

module.exports = Api
