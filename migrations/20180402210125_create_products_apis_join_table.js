exports.up = knex => knex.schema.createTable('products_apis', t => {
  t.timestamps()

  t.integer('product_id').notNull().references('products.id').onDelete('CASCADE')
  t.integer('api_id').notNull().references('apis.id').onDelete('CASCADE')

})

exports.down = knex => knex.schema.dropTable('products_apis')
