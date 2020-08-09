// Servidor Dependencies Express

// Variável constante 'express' com a função Express
const express = require('express') 
// Variável constante 'server' que executa a função Express
const server = express()

server.use(express.static("public"))        // .use : Configuração do nosso servidor

.get("/", (req, res) => {                   // () = > {} : Função curta
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, res) => {
    return res.send("Study")
})

.listen(5500)