

//Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache: true,

})

//Inicio do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))

//COnfigurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5500)
