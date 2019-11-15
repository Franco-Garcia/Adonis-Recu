'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Hojaparte extends Model {
    static get table(){
        return 'hojaparte'
    }

    mecanicor(){
        return this.belongsTo('App/Models/Mecanicor','mecanicor_id')
    }
}

module.exports = Hojaparte
