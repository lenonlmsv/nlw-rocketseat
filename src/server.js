const proffys = [
    {
        name: "Lenon Manhães",
        avatar: "https://avatars1.githubusercontent.com/u/55552940?s=460&u=e74d048c7015c1d2e2e8d66ff4cb2c879cecc900&v=4", 
        whatsapp: "21971111111",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Química",
        cost: "20",
        weekday: [
            0
        ],
        time_from: "720",
        time_to: "1220"    
    },

    {
        name: "João da Silva",
        avatar: "https://avatars1.githubusercontent.com/u/55552940?s=460&u=e74d048c7015c1d2e2e8d66ff4cb2c879cecc900&v=4", 
        whatsapp: "21971111111",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Matemática",
        cost: "20",
        weekday: [
            2
        ],
        time_from: "720",
        time_to: "1220"    
    }
]

function pageLanding(req, res) {
    return res.render('index.html');
}

function pageStudy(req, res) {
    return res.render('study.html', {proffys});
}

function pageGiveClasses(req, res) {
    return res.render('give-classes.html');
}

const express = require('express')
const server = express()

//configuração da nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//configuração estática do servidor
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500);  