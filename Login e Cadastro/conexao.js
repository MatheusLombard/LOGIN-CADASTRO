let mysql = require('mysql')

let conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
})

con.connect(function (error) {
    if (error) {
        throw console.log("Erro na conexão, mensagem: " + error)
    }
    console.log("Conectado ao banco de dados")

})


module.export = conexao