const express = require('express');
const productos = require('./modules/products')
const { json, urlencoded, static } = express;

const app = express();

const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('pages/index');
});

app.use('/productos', productos);



const server = app.listen(PORT, () => {
    console.log(`Conectado al puerto EJS http://localhost:${server.address().port}`);
})