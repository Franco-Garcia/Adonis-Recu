'use strict'

const Mecanicor = use('App/Models/Mecanicor');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicors
 */
class MecanicorController {
  /**
   * Show a list of all mecanicors.
   * GET mecanicors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let mecanicor = await Mecanicor.all();
    return view.render('mecanicor/index',{mecanicor: mecanicor.rows});
  }

  /**
   * Render a form to be used for creating a new mecanicor.
   * GET mecanicors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('mecanicor/crear')
  }

  /**
   * Create/save a new mecanicor.
   * POST mecanicors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const mecanicor = new Mecanicor();
    mecanicor.nombre = request.input('nombre');
    mecanicor.direccion = request.input('direccion');
    mecanicor.telefono = request.input('telefono');
    mecanicor.costoxhora = request.input('costoxhora');
    mecanicor.categoria = request.input('categoria');
    await mecanicor.save();
    return response.redirect("/mecanicor");
  }

  /**
   * Display a single mecanicor.
   * GET mecanicors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const mecanicor = await Mecanicor.find(params.id);
    return view.render('mecanicor/crear',{mecanicor:mecanicor});
  }

  /**
   * Render a form to update an existing mecanicor.
   * GET mecanicors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let mecanicor = await Mecanicor.find(params.id);
    return view.render('mecanicor/editar',{mecanicor})
  }

  /**
   * Update mecanicor details.
   * PUT or PATCH mecanicors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const mecanicor = await Mecanicor.find(params.id);
    mecanicor.nombre = request.input('nombre');
    mecanicor.direccion = request.input('direccion');
    mecanicor.telefono = request.input('telefono');
    mecanicor.costoxhora = request.input('costoxhora');
    mecanicor.categoria = request.input('categoria');
    await mecanicor.save();
    return response.redirect("/mecanicor");
  }

  /**
   * Delete a mecanicor with id.
   * DELETE mecanicors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const mecanicor = await Mecanicor.find(params.id);
    await mecanicor.delete();
    return response.redirect('/mecanicor');
  }
}

module.exports = MecanicorController
