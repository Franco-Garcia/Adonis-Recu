'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicorvSchema extends Schema {
  up () {
    this.create('mecanicorv', (table) => {
      table.increments()
      table.integer('mecanicor_id').unsigned().references('id').inTable('mecanicor')
      table.integer('vehiculo_id').unsigned().references('id').inTable('vehiculo')
      table.timestamps()
    })
  }

  down () {
    this.drop('mecanicorv')
  }
}

module.exports = MecanicorvSchema
