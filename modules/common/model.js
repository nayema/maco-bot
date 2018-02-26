const config = require('config')
const Knex = require('knex')
const { Model } = require('objection')

const knex = Knex(config.get('db'))
Model.knex(knex)

module.exports = Model
