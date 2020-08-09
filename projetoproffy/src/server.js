// Servidor Dependencies Express
require('express')()
.get("/", (req, res) => {  // Função curta
    return res.send("Hi from NLW")
})
.listen(5500)