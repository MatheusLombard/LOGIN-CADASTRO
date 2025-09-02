const conexao = require("./conexao")
class Usuarios{
    criaUsuarios(nome, idade, endereco) {
        
        let sql = `INSERT INTO Usuarios (nome, idade, endereco) VALUES (${nome}, ${idade}, ${endereco})`;
        conexao.query(sql, function (err, result) {
            if (err) throw err;
            return `Resultado: ${result}`
            
        });
    }
    buscarUsuarios() {
        let sql = `SELECT * FROM Usuarios`
        conexao.query(sql, function(error, result){ 
            if(error) throw error
            return result
        })
    }
}

module.export = Usuarios();