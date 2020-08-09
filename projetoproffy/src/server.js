// Servidor Dependencies Express
require('express')()
.get("/", (req, res) => {  // Função curta
    return res.send("Hi from NLW")
})
.get("/", (req, res) => {
    return res.send("Página study")
})
.listen(5500)