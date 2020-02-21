const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const isMember = require('./isMember')

const port = 3000

app.engine('handlebars', exphbs({ defautLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/', (req, res) => {

  const emailUser = req.body.email
  const passwordUser = req.body.password

  console.log('result:', isMember(emailUser, passwordUser))

  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port} project basic login`)
})