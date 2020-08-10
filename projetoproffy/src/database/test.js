// Pegando o exports
const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    // Tabela proffys
    proffyValue = {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "8998877665",
        bio: "Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: Aprenda a fazer dinheiro com isso!",
    }

    // Tabela classes
    classValue = {
        subject: "Educação Física",
        cost:  "40",
        // O proffy_id virá pelo banco de dados
    }

    // Tabela class_schedule
    classScheduleValues = [
        {
            // O class_id virá pelo banco de dados, após cadastramos a class
            weekday: 1,
            time_from: 1080, // Em minutos
            time_to: 1200 // Em minutos
        },
        {
            weekday: 2,
            time_from: 1020, // Em minutos
            time_to: 1140 // Em minutos
        }
    ]

    // Com todos os dados
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)
})