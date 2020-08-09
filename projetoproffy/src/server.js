// Servidor Dependencies Express
require('express') // Retorna o Express

// Criando uma função - Registro
function thisIsAfunction(){
    // Função retornando o valor
    return "texto" // Valor String
    return 12      // Valor Int
    return true    // Valor Boolean
    return {       // Valor Object
        name: "Jesus",
        age: 33
    }
}

// Executar uma função
thisIsAfunction()