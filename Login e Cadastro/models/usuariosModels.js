const conexao = require('../conexao');
class UsuariosModels {
    listar() {
        let sql = `SELECT Usuario_ID FROM usuarios WHERE usuarios.CPF = 1111111111 AND usuarios.Senha = '123321'
                    `
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)

            })
        })

    }
}

module.exports = new UsuariosModels()