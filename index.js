const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const postRouter = require('./routes/posting')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.get('/', (req,res) => {
    res.render('index')
})

app.use('/', postRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})