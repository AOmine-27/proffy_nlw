const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados
    
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "92857392",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject:"1",
        cost: "28",
        //proffy_id virá pelo db

    }

    classScheduleValues = [
        //class_id virá pelo bd após cadastrarmos a classe
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //Consultar os dados inseridos

    //Todos os proffys
    const selectdProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectdProffys)

    //Consultar as classes de um determinado professor e trazer os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes on ( classes.proffy_id = proffys.id )
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    //o horário que a pessoa trabalha é das 8h até as 18h
    //o horário do time_from precisa ser antes ou igual ao horário selecionado
    //o time_to precisa ser acima

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= 540
        AND class_schedule.time_to > 1300
    `)

    console.log(selectClassesSchedule)

})