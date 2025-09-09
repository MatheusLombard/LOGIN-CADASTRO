let mysql = require('mysql2')

let conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "TREINAMENTO",
    multipleStatements: "true"
    
})

conexao.connect(function (error) {
    if (error) {
        throw console.log("Erro na conexão, mensagem: " + error)
    }
    console.log("Conectado ao banco de dados")

})
//teste

module.exports = conexao