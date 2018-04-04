exports.up = knex => knex.schema.createTable('apis', t => {
  t.increments()
  t.timestamps()

  t.text('name').notNull()
  t.float('adi').notNull()

})

exports.down = knex => knex.schema.dropTable('apis')
