const Equipment = require('./Equipment')

class EquipmentController {
  static async getAll (req, res) {
    const equipment = await Equipment.query()
    return res.send(equipment)
  }

  static async add (req, res) {
    const equipment = await Equipment.query().insert({
      'name': req.body['name'],
      'asset_id': req.body['asset_id'],
      'product_contact_surface_area': req.body['product_contact_surface_area'],
      'minimum_batch_size': req.body['minimum_batch_size']
    })
    return res.send(equipment)
  }

  static async update (req, res) {
    await Equipment
      .query()
      .update({
        'name': req.body['name'],
        'asset_id': req.body['asset_id'],
        'product_contact_surface_area': req.body['product_contact_surface_area'],
        'minimum_batch_size': req.body['minimum_batch_size']
      })
      .where('id', req.body['id'])
    return res.end()
  }

  static async remove (req, res) {
    await Equipment
      .query()
      .delete()
      .where('id', req.body['id'])
    return res.end()
  }
}

module.exports = EquipmentController
