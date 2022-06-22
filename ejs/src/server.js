const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const routes = require('./routes/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use('/', routes) 

app.listen(port, (err) => {
    if(err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`Escuchando puerto ${port}`);
    }
});