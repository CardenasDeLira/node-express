const { Router } = require('express')
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios')

const routes = Router()

routes.get('/', usuariosGet)

routes.put('/:id', usuariosPut)

routes.post('/', usuariosPost)

routes.delete('/', usuariosDelete)

routes.patch('/', usuariosPatch)

module.exports = routes