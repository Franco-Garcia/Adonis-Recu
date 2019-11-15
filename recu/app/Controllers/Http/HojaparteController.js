'use strict'

const Hojaparte = use('App/Models/Hojaparte');
const Mecanicor = use('App/Models/Mecanicor');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with hojapartes
 */
class HojaparteController {
  /**
   * Show a list of all hojapartes.
   * GET hojapartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let hojaparte = await Hojaparte.query().with('mecanicor').fetch();

    return view.render('hojaparte/index',{hojaparte: hojaparte.toJSON()});
  }

  /**
   * Render a form to be used for creating a new hojaparte.
   * GET hojapartes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let mecanicor = await Mecanicor.all();
    return view.render('hojaparte/crear',{mecanicor:mecanicor.rows})
  }

  /**
   * Create/save a new hojaparte.
   * POST hojapartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const hojaparte = new Hojaparte();
    hojaparte.concepto = request.input('concepto');
    hojaparte.cantidad = request.input('cantidad');
    hojaparte.reparacion = request.input('reparacion');
    hojaparte.mecanicor_id = request.input('mecanicor_id');
    await hojaparte.save();
    return response.redirect("/hojaparte");
  }

  /**
   * Display a single hojaparte.
   * GET hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing hojaparte.
   * GET hojapartes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const hojaparte = await Hojaparte.find(params.id);
    let mecanicor = await Mecanicor.all();
    return view.render('hojaparte/editar',{mecanicor:mecanicor.rows , hojaparte:hojaparte})
  }

  /**
   * Update hojaparte details.
   * PUT or PATCH hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const hojaparte = await Hojaparte.find(params.id);
    hojaparte.concepto = request.input('concepto');
    hojaparte.cantidad = request.input('cantidad');
    hojaparte.reparacion = request.input('reparacion');
    hojaparte.mecanicor_id = request.input('mecanicor_id');
    await hojaparte.save();
    return response.redirect("/hojaparte");
  }

  /**
   * Delete a hojaparte with id.
   * DELETE hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const hojaparte = await Hojaparte.find(params.id);
    await hojaparte.delete();
    return response.redirect('/hojaparte');
  }
}

module.exports = HojaparteController
