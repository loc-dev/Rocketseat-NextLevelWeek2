// Dicas 
// () = > {} : Função curta

// Servidor Dependencies Express

// Dados
// Pegando os dados de maneira dinâmica do arquivo study.html
const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "89987654534", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    { 
        name: "Leonardo Oliveira", 
        avatar: "https://avatars2.githubusercontent.com/u/63181989?s=400&u=146ea59ffafacbd883d75c6c96b8a7b0b3dd5fbf&v=4", 
        whatsapp: "65974863511", 
        bio: "É hora de escolher a pílula vermelha", 
        subject: "Filosofia", 
        cost: "120", 
        weekday: [3], 
        time_from: [25200], 
        time_to: [900]
    }
]

const subjects = [    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades para recarregamento das páginas em HTML

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    // Receber os dados e mandar de volta
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    // Se tiver dados :
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        // Adicionar dados a Lista de Proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    
    // Senão :
    // Não adicionar e mostrar a página
    return res.render("give-classes.html", { subjects, weekdays })
}

// Variável constante 'express' com a função Express
const express = require('express') 
// Variável constante 'server' que executa a função Express
const server = express()

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
// Configuração dos arquivos estáticos (css, imagens, scripts)
.use(express.static("public"))
// Rotas da aplicação 
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// Start do Servidor
.listen(5500)