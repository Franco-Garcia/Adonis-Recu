'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repuesto extends Model {
    static get table(){
        return 'repuesto'
    }

    mecanicor(){
        return this.belongsTo('App/Models/Mecanicor','hojaparte_idmec')
    }

    hojaparte(){
        return this.belongsTo('App/Models/Hojaparte','hojaparte_id')
    }
}

module.exports = Repuesto
