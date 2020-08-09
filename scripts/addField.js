// Funcionalidade para adicionar um novo campo de horário
// Procurar o Botão (+ Novo Horário)
document.querySelector("#add-time")
// Quando clicar no Botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos (Quais campos?)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // MANEIRA NÃO INTELIGENTE
    // 1. Limpar os campos (Que campos?)
    // const fields = newFieldContainer.querySelectorAll('input')
 
    // fields[0].value = ""
    // fields[1].value = ""

    // INTELIGENTE 
    // 1. Pegar os campos (Que campos?)
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Coletar o Field do momento e LIMPA|RESETA
        field.value = ""
    })


    // Colocar na página (Onde colocar?)
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
