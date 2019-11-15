'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Mecanicorv extends Model {
    static get table(){
        return 'mecanicorv'
    }

    mecanicor(){
        return this.belongsTo('App/Models/Mecanicor','mecanicor_id')
    }

    vehiculo(){
        return this.belongsTo('App/Models/Vehiculo','vehiculo_id')
    }
}

module.exports = Mecanicorv
