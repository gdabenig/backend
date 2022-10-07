const express = require('express');
const hbs = require('express-handlebars')
const productos = require('./modules/products');
const { json, urlencoded, static } = express;

const app = express();

const PORT = process.env.PORT || 3001;

app.use(json());
app.use(urlencoded({ extended: true }));

app.engine('Hbs', hbs.engine({
    extname: '.Hbs',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'layouts.hbs'
}));

app.set('views', './views');
app.set('view engine', 'Hbs');


app.get('/', (req, res) => {
    res.render('index')
});

app.use('/productos', productos);

const server = app.listen(PORT, () => {
    console.log(`conectando con Handlebars es aqui http://localhost:${server.address().port}`);
});
