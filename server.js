const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router/router')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000;

app.set(bodyParser.urlencoded({extended: true}))
app.use('/assets', express.static('assets'))

app.use('/', router)


app.listen(port, () => console.log(`App listening on port ${port}`))
