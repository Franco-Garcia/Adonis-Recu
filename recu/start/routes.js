'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('cliente','ClienteController.index') //muestra todos los productos All()
//Route.get('cliente/:id','ClienteController.show') //muestra un producto find() -> id
Route.get('cliente/crear','ClienteController.create') //crea un producto save()
Route.post('cliente/crear','ClienteController.store') //crea un producto save()
Route.get('cliente/editar/:id','ClienteController.edit') //edita un product save() -> id
Route.post('cliente/editar/:id','ClienteController.update') //edita un product save() -> id
Route.get('cliente/eliminar/:id','ClienteController.destroy') //eliminar un producto delete() -> id

Route.get('vehiculo','VehiculoController.index') //muestra todos los productos All()
//Route.get('vehiculo/:id','VehiculoController.show') //muestra un producto find() -> id
Route.get('vehiculo/crear','VehiculoController.create') //crea un producto save()
Route.post('vehiculo/crear','VehiculoController.store') //crea un producto save()
Route.get('vehiculo/editar/:id','VehiculoController.edit') //edita un product save() -> id
Route.post('vehiculo/editar/:id','VehiculoController.update') //edita un product save() -> id
Route.get('vehiculo/eliminar/:id','VehiculoController.destroy') //eliminar un producto delete() -> id

Route.get('mecanicorv','MecanicorvController.index') //muestra todos los productos All()
//Route.get('mecanicorv/:id','MecanicorvController.show') //muestra un producto find() -> id
Route.get('mecanicorv/crear','MecanicorvController.create') //crea un producto save()
Route.post('mecanicorv/crear','MecanicorvController.store') //crea un producto save()
Route.get('mecanicorv/editar/:id','MecanicorvController.edit') //edita un product save() -> id
Route.post('mecanicorv/editar/:id','MecanicorvController.update') //edita un product save() -> id
Route.get('mecanicorv/eliminar/:id','MecanicorvController.destroy') //eliminar un producto delete() -> id

Route.get('mecanicor','MecanicorController.index') //muestra todos los productos All()
//Route.get('mecanicor/:id','MecanicorController.show') //muestra un producto find() -> id
Route.get('mecanicor/crear','MecanicorController.create') //crea un producto save()
Route.post('mecanicor/crear','MecanicorController.store') //crea un producto save()
Route.get('mecanicor/editar/:id','MecanicorController.edit') //edita un product save() -> id
Route.post('mecanicor/editar/:id','MecanicorController.update') //edita un product save() -> id
Route.get('mecanicor/eliminar/:id','MecanicorController.destroy') //eliminar un producto delete() -> id

Route.get('factura','FacturaController.index') //muestra todos los productos All()
//Route.get('factura/:id','FacturaController.show') //muestra un producto find() -> id
Route.get('factura/crear','FacturaController.create') //crea un producto save()
Route.post('factura/crear','FacturaController.store') //crea un producto save()
Route.get('factura/editar/:id','FacturaController.edit') //edita un product save() -> id
Route.post('factura/editar/:id','FacturaController.update') //edita un product save() -> id
Route.get('factura/eliminar/:id','FacturaController.destroy') //eliminar un producto delete() -> id

Route.get('hojaparte','HojaparteController.index') //muestra todos los productos All()
//Route.get('hojaparte/:id','HojaparteController.show') //muestra un producto find() -> id
Route.get('hojaparte/crear','HojaparteController.create') //crea un producto save()
Route.post('hojaparte/crear','HojaparteController.store') //crea un producto save()
Route.get('hojaparte/editar/:id','HojaparteController.edit') //edita un product save() -> id
Route.post('hojaparte/editar/:id','HojaparteController.update') //edita un product save() -> id
Route.get('hojaparte/eliminar/:id','HojaparteController.destroy') //eliminar un producto delete() -> id

Route.get('repuesto','RepuestoController.index') //muestra todos los productos All()
//Route.get('repuesto/:id','RepuestoController.show') //muestra un producto find() -> id
Route.get('repuesto/crear','RepuestoController.create') //crea un producto save()
Route.post('repuesto/crear','RepuestoController.store') //crea un producto save()
Route.get('repuesto/editar/:id','RepuestoController.edit') //edita un product save() -> id
Route.post('repuesto/editar/:id','RepuestoController.update') //edita un product save() -> id
Route.get('repuesto/eliminar/:id','RepuestoController.destroy') //eliminar un producto delete() -> id