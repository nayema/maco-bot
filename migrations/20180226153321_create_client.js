exports.up = knex => knex.schema.createTable('clients', t => {
  t.increments()
  t.timestamps()

  t.text('name').notNull().unique()
})

exports.down = knex => knex.schema.dropTable('clients')
