// Dicas 
// () = > {} : Função curta

// Servidor Dependencies Express

// Variável constante 'express' com a função Express
const express = require('express') 
// Variável constante 'server' que executa a função Express
const server = express()

const  { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Configuração do Nunjucks (Template Engine)
const nunjucks = require('nunjucks')

// 1º coisa onde está a pasta dos meus HTMLs
// 2º Enviar os objetos com algumas opções
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


// Configuração do nosso servidor
server
// Receber os dados do req.body (pageGiveClasses)
.use(express.urlencoded({ extended: true }))
// Configuração dos arquivos estáticos (css, imagens, scripts)
.use(express.static("public"))
// Rotas da aplicação 
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do Servidor
.listen(5500)