exports.up = knex => knex.schema.createTable('process_train', t => {
  t.timestamps()

  t.integer('api_id').notNull().references('apis.id').onDelete('CASCADE')
  t.integer('equipment_id').notNull().references('equipment.id').onDelete('CASCADE')

})

exports.down = knex => knex.schema.dropTable('process_train')

