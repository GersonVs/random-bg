const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

const port = process.env.PORT || 3000

app.use(express.static(__dirname)) //reconhece o css
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.use('/', router)
console.log("Ta rodando")
app.listen(port)
