const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const port = 3000

app.engine('handlebars', exphbs({ defautLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port} project basic login`)
})