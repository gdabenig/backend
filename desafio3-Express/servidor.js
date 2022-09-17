const express = require('express')
const app = express()

const Contenedor = require('./Container')
const PORT = 8080

const productos= new Contenedor ('productos.txt')

app.get('/', (req, res)=>{
    res.send('Hola Estoy en Coder ahora')
    console.log(productos.read())
})


app.get('/productos', (req, res)=>{
    res.json(productos.getAll())
    console.log(productos.getAll());
})

app.get('/productosRandon', (req, res) => {
   
 const result = productos.getAll()
 const randomProduct = result[Math.floor(Math.random() * result.length)]; 
 res.json(productos.getById(randomProduct));
 

})
app.listen(PORT, ()=>{
    console.log(`Servidor recibiendo en puerto ${PORT}`);
})