const express = require('express')
const { dirname } = require('path')
const app = express()
const path = require('path')
const router = express.Router()

const port = process.env.PORT || 3000


app.use(express.static(__dirname)) //reconhece esse diretório como raiz do static
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'))
})

router.get('/colors', function(req, res){
    res.sendFile(path.join(__dirname+'/src/html/page1.html'))
})

app.use('/', router)
console.log("Ta rodando")
app.listen(port)
