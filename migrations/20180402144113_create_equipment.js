exports.up = knex => knex.schema.createTable('equipment', t => {
  t.increments()
  t.timestamps()

  t.text('name').notNull()
  t.integer('asset_id')
  t.float('product_contact_surface_area')
  t.float('minimum_batch_size')
})

exports.down = knex => knex.schema.dropTable('equipment')
