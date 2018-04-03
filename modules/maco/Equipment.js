const Model = require('../common/model')

class Equipment extends Model {
  static get tableName () {
    return 'equipment'
  }
}

module.exports = Equipment
