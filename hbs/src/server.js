const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes/index.js')
const { engine } = require('express-handlebars')
const path = require('path')

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layout/main.hbs'),
    layoutsDir: path.join(__dirname, '/views'),
    partialsDir: path.join(__dirname, '/views')
}))

app.set('views', path.join(__dirname,'./views'))
app.set('view engine', 'hbs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes) 

app.listen(port, (err) => {
    if(err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`Escuchando puerto ${port}`);
    }
});