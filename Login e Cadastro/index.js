require("dotenv").config()
const con = require("./conexao")
const tabelas = require("./tabelas")

tabelas.init(con)

//EXPRESS
const express = require('express')
const app = express()
const porta = process.env.PORTA

const router = require('./rotas/index')
router(app)


app.listen(porta, () => {
  console.log(`SERVIDOR NA PORTA: ${porta}`)
})