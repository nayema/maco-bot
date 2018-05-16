const Model = require('../common/model')

class ProcessTrain extends Model {
  static get tableName () {
    return 'process_train'
  }
}

module.exports = ProcessTrain
