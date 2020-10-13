var express = require('express')
var hbs = require('hbs')

var app = express()
var time, url;

app.set('view engine', hbs)
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('footer', () => {
    return new Date().getFullYear()
})
app.use((req, res, next) => {
    url = req.url
    console.log(`method : ${req.method}; url : ${url}`)
    time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}; ${new Date().toDateString()}`
    next()

})
hbs.registerHelper('getTime', () => {
    return time
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    })
})
app.get('/contect', (req, res) => {
    res.render('contect.hbs', {
        pageTitle: 'Contect Page'
    })
})
app.listen(5000, () => {
    console.log('you are listining at port 3000');
})