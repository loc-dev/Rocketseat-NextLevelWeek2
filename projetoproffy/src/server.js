// Servidor Dependencies Express
require('express')()
.get("/", (req, res) => {  // Função curta
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, res) => {
    return res.send("Study")
})
.listen(5500)


