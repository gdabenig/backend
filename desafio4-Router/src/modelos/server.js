const express = require('express');
const CORS = require('cors');
const productsRouter = require('../routes/productos.route');
const PORT = 8080
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.apiProductsPath = '/api/products';

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // CORS: Enable CORS.
    this.app.use(CORS());

    // Permite entender json a javascript
    this.app.use(express.urlencoded({extended:true}));

    // Lee y parsea
    this.app.use(express.json());

    // Directorio Public
    this.app.use(express.static('public'));
  }

  // Rutas
  routes() {
    this.app.use(this.apiProductsPath, productsRouter);
  }

  // Arranca Servicio
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;

