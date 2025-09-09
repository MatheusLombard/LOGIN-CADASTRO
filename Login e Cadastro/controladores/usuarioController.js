const conexao = require("../conexao")
const modelsUsuario = require('../models/usuariosModels')
class UsuariosControlers {
    buscarUsuarios() {
        return modelsUsuario.listar();
    }
}

module.exports = new UsuariosControlers();