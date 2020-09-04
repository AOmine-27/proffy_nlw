//Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "92857392",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost: "28",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },

    {
        name: "Myke",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "92857392",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost: "28",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }


]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
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

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber-1
    return subjects[arrayPosition]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects,weekdays })
}

function pageGiveClasses(req, res){
    //Adicionar dados ao Proffys
    const data = req.query
    
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        proffys.push(data)

        data.subject = getSubject(data.subject)

        return res.redirect("/study")
    } 
    return res.render("give-classes.html", {subjects,weekdays })
}


//Servidor
const express = require('express')
const server = express()


//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache: true,

})

//Inicio do servidor
server

//COnfigurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)
