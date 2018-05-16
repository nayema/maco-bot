const Model = require('../common/model')

class Equipment extends Model {
  static get tableName () {
    return 'equipment'
  }

  static get relationMappings () {
    return {
      apis: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./Api'),
        join: {
          from: 'equipment.id',
          through: {
            from: 'process_train.equipment_id',
            to: 'process_train.api_id'
          },
          to: 'apis.id'
        }
      }
    }
  }
}

module.exports = Equipment
