'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HojaparteSchema extends Schema {
  up () {
    this.create('hojaparte', (table) => {
      table.increments()
      table.string('concepto',45).notNullable()
      table.integer('cantidad').notNullable()
      table.string('reparacion',45).notNullable()
      table.integer('mecanicor_id').unsigned().references('id').inTable('mecanicor')
      table.timestamps()
    })
  }

  down () {
    this.drop('hojaparte')
  }
}

module.exports = HojaparteSchema
