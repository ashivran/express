const express = require('express')
var bodyParser = require('body-parser')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const app = express()

app.use(express.static('public'))
app.use(express.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
  res.send(index.html)
})
 
app.post('/submit', upload.single('optionbimage'), function (req, res) {
    console.log(req.body);
    
    res.send(req.body)
  })


app.listen(process.env.port || 3000)
