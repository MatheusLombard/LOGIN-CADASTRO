class Tabelas {
    init(con) {
        this.con = con;

        this.criarUsuarios();
        // this.criarEnderecos();
        // this.criarUsuariosEnderecos();
        // this.criarChavesReferencia();


    }


    criarUsuarios() {
        let sql = `CREATE TABLE IF NOT EXISTS Usuarios ( 
                    Usuario_ID INT PRIMARY KEY AUTO_INCREMENT,  
                    Nome VARCHAR(50) NOT NULL,  
                    Telefone VARCHAR(14) NOT NULL,  
                    CPF INT NOT NULL,    
                    CEP VARCHAR(9) NOT NULL,  
                    Logradouro VARCHAR(100) NOT NULL,  
                    Cidade VARCHAR(40) NOT NULL,  
                    Bairro VARCHAR(30) NOT NULL,  
                    UF VARCHAR(2) NOT NULL,
                    Numero_Casa INT,
                    UNIQUE (Telefone,CPF)
                );`
        this.con.query(sql, (erro, resultado) => {
            if (erro) throw console.log(`Deu erro, mesagem: ${erro}`)
            return console.log(`Tabela USUARIO criada`)
        })
    }
    // criarEnderecos() {
    //     let sql = `CREATE TABLE IF NOT EXISTS Endereco ( 
    //                 Endereco_ID INT PRIMARY KEY AUTO_INCREMENT,  
    //                 CEP VARCHAR(9) NOT NULL,  
    //                 Logradouro VARCHAR(100) NOT NULL,  
    //                 Cidade VARCHAR(40) NOT NULL,  
    //                 Bairro VARCHAR(30) NOT NULL,  
    //                 UF VARCHAR(2) NOT NULL,  
    //                 UNIQUE (CEP)
    //             );`
    //     this.con.query(sql, (erro, resultado) => {
    //         if (erro) throw erro
    //         return console.log('Tabela ENDERECO criada')
    //     })
    // }
    // criarUsuariosEnderecos() {
    //     let sql = `CREATE TABLE IF NOT EXISTS Usuario_endereco ( 
    //                 Usuario_Endereco_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
    //                 Endereco_ID INT NOT NULL,  
    //                 Usuario_ID INT NOT NULL,  
    //                 Numero INT NOT NULL,  
    //                 UNIQUE (Endereco_ID, Usuario_ID)
    //             );


    //             `
    //     this.con.query(sql, (erro, resultado) => {
    //         if (erro) throw erro
    //         return console.log('Tabela USUARIO_ENDERECO criada')
    //     })
    // }
    criarChavesReferencia() {
        let sql = ` ALTER TABLE usuarios ADD FOREIGN KEY(Endereco_ID) REFERENCES Endereco (Endereco_ID);
                `
        this.con.query(sql, (erro) => {
            if (erro) throw erro;
            return 'Tabelas atualizadas...'
        })
    }
}
module.exports = new Tabelas;