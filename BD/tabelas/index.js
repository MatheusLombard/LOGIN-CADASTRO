var con = require('../conexao')
class Tabelas {
    criarUsuarios() {
        let sql = `CREATE TABLE IF NOT EXISTS Usuarios ( 
                    Usuario_ID INT PRIMARY KEY AUTO_INCREMENT,  
                    Nome VARCHAR(50) NOT NULL,  
                    Telefone VARCHAR(14) NOT NULL,  
                    CPF INT NOT NULL,  
                    UNIQUE (Telefone,CPF)
                );`
        con.query(sql, (erro, resultado) => {
            if(erro) throw console.log(`Deu erro, mesagem: ${erro}`)
            return console.log(`Tabela Usuario criada`)
        })               
    }
    criarEnderecos(){
        let sql = `CREATE TABLE IF NOT EXISTS Endereco ( 
                    Endereco_ID INT PRIMARY KEY AUTO_INCREMENT,  
                    CEP VARCHAR(9) NOT NULL,  
                    Logradouro VARCHAR(100) NOT NULL,  
                    Cidade VARCHAR(40) NOT NULL,  
                    Bairro VARCHAR(30) NOT NULL,  
                    UF VARCHAR(2) NOT NULL,  
                    UNIQUE (CEP)
                );`
        con.query(sql, (erro, resultado) => { 
            if(erro) throw erro
            return  console.log('Tabela Endereço criada')
        })
    }
    criarUsuariosEnderecos(){
        let sql = `CREATE TABLE IF NOT EXISTS Usuario_endereco ( 
                    Usuario_Endereco_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
                    Endereco_ID INT NOT NULL,  
                    Usuario_ID INT NOT NULL,  
                    Numero INT NOT NULL,  
                    UNIQUE (Endereco_ID, Usuario_ID)
                );

                
                `
                con.query(sql, (erro, resultado) => { 
            if(erro) throw erro
            return  console.log('Tabela Usuario_endereco criada')
        })
    }
}
module.exports = new Tabelas