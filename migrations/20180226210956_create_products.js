exports.up = knex => knex.schema.createTable('products', t => {
  t.increments()
  t.timestamps()

  t.text('name').notNull()
  t.integer('client_id').notNull().references('clients.id').onDelete('CASCADE')
})

exports.down = knex => knex.schema.dropTable('products')
