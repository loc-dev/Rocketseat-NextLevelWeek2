// Servidor Dependencies Express

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

// Variável constante 'express' com a função Express
const express = require('express') 
// Variável constante 'server' que executa a função Express
const server = express()

server.use(express.static("public"))        // .use : Configuração do nosso servidor

.get("/", (req, res) => {                   // () = > {} : Função curta
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})

.listen(5500)