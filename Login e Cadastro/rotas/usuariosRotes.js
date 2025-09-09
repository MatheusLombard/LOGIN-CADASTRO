const { Router } = require('express')
const router = Router()
const controller = require('../controladores/usuarioController')


router.get('/login', (req, res) => {
  const listaUsuarios = controller.buscarUsuarios();
  listaUsuarios
    .then((usuarios) => res.status(200).json(usuarios))
    .catch((error) => res.status(400).json(error.message))
})

module.exports = router