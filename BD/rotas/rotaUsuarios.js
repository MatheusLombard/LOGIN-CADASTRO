const express = require('express')
const app = express()
const porta = 3000
const controlaUsuarios = require('../controllers/controlaUsuarios')


app.post('/usuarios', (req, res) => {
  let userName = req.body.userName;
  let senha = req.body.senha;

  const resposta = controlaUsuarios.buscarUsuarios();
  
  res.send(resposta)
  

})

app.listen(porta, () => {
  console.log(`SERVIDOR NA PORTA: ${porta}`)
})