'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicorSchema extends Schema {
  up () {
    this.create('mecanicor', (table) => {
      table.increments()
      table.string('nombre',45).notNullable()
      table.string('direccion',45).unique()
      table.string('telefono',45).unique()
      table.decimal('costoxhora').notNullable()
      table.string('categoria',45).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('mecanicor')
  }
}

module.exports = MecanicorSchema
