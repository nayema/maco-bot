const Model = require('../../common/model')

class Client extends Model {
  static get tableName () {
    return 'clients'
  }
}

module.exports = Client
