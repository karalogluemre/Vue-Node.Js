const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined')) // use  : kullanmak
app.use(bodyParser.json())
app.use(cors())

// request : talep et | response : cevap
// send : gönder

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Emre KARALOĞLU`
  })
})

app.listen(process.env.PORT || 8081) // process: yönlendir | env: el ile besle
