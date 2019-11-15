'use strict'
const Vehiculo = use('App/Models/Vehiculo');
const Mecanicor = use('App/Models/Mecanicor');
const Mecanicorv = use('App/Models/Mecanicorv');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicorvs
 */
class MecanicorvController {
  /**
   * Show a list of all mecanicorvs.
   * GET mecanicorvs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let mecanicorv = await Mecanicorv.query().with('mecanicor').with('vehiculo').fetch();

    return view.render('mecanicorv/index',{mecanicorv: mecanicorv.toJSON()});
  }

  /**
   * Render a form to be used for creating a new mecanicorv.
   * GET mecanicorvs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let mecanicor = await Mecanicor.all();
    let vehiculo = await Vehiculo.all();
    return view.render('mecanicorv/crear',{mecanicor:mecanicor.rows , vehiculo:vehiculo.rows})
  }

  /**
   * Create/save a new mecanicorv.
   * POST mecanicorvs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const mecanicorv = new Mecanicorv();
    mecanicorv.mecanicor_id = request.input('mecanicor_id');
    mecanicorv.vehiculo_id = request.input('vehiculo_id');
    await mecanicorv.save();
    return response.redirect("/mecanicorv");
  }

  /**
   * Display a single mecanicorv.
   * GET mecanicorvs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing mecanicorv.
   * GET mecanicorvs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const mecanicorv = await Mecanicorv.find(params.id);
    let mecanicor = await Mecanicor.all();
    let vehiculo = await Vehiculo.all();
    return view.render('mecanicorv/editar',{mecanicor:mecanicor.rows , vehiculo:vehiculo.rows , mecanicorv:mecanicorv})
  }

  /**
   * Update mecanicorv details.
   * PUT or PATCH mecanicorvs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const mecanicorv = await Mecanicorv.find(params.id);
    mecanicorv.mecanicor_id = request.input('mecanicor_id');
    mecanicorv.vehiculo_id = request.input('vehiculo_id');
    await mecanicorv.save();
    return response.redirect("/mecanicorv");
  }

  /**
   * Delete a mecanicorv with id.
   * DELETE mecanicorvs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const mecanicorv = await Mecanicorv.find(params.id);
    await mecanicorv.delete();
    return response.redirect('/mecanicorv');
  }
}

module.exports = MecanicorvController
