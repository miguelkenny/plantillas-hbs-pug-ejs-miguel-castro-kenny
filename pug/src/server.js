const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes/index.js')
const path = require('path')


app.set('views', path.join(__dirname,'./views'))
app.set('view engine', 'pug')

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