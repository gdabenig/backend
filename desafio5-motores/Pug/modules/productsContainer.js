class Container {
    constructor(products = []) {
        this.products = products,
            this.lastId = 1,
            this.error = { error: 'producto no encontrado' }
    }

    #productExists(id) {
        const product = this.products.find(product => product.id === parseInt(id));

        if (product) {
            return true
        }

        return false
    }

    save(data) {
        let { nombre, precio, UrlImagen } = data;

        precio = parseInt(precio);

        if (this.products.length === 0) {
            this.products = [{ nombre, precio, UrlImagen, id: this.lastId }];

            return this.lastId
        } else {
            this.lastId = this.products[this.products.length - 1].id + 1;
            this.products = [...this.products, { nombre, precio, UrlImagen, id: this.lastId }];

            return this.lastId
        }
    }

    change(id, data) {
        const exists = this.#productExists(id)

        if (exists) {
            let { nombre, precio } = data;
            const productId = parseInt(id)
            precio = parseInt(precio);

            const indexProduct = this.products.indexOf(this.products.find(product => product.id === productId));

            this.products[indexProduct] = { nombre, precio, productId };
        }

        return exists
    }

    getAll() {
        return this.products
    }

    getById(id) {
        const exists = this.#productExists(id)

        if (exists) {
            const productFound = this.products.find(product => product.id === parseInt(id));
            return productFound
        }

        return exists
    }

    deleteById(id) {
        const exists = this.#productExists(id)

        if (exists) {
            const deletedProduct = this.products.indexOf(this.products.find(product => product.id === parseInt(id)));

            this.products.splice(deletedProduct, 1);

            return exists
        }

        return exists
    }

    deleteAll() {
        this.products = [];

        console.log("Productos borrados");
    }
}

const container = new Container([
    {
        nombre: "Samsung galaxy S10",
        precio: 75000,
        urlImagen: 'https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp',
        id: 1
    },
    {
        nombre: "Samsung galaxy S20",
        precio: 120000,
        urlImagen: 'https://images.samsung.com/my/smartphones/galaxy-s20/images/galaxy-s20-share-image.jpg',
        id: 2
    },
    {
        nombre: "Iphone 11",
        precio: 175000,
        urlImagen: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-black-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1567021766023',
        id: 3
    },
    {
        nombre: "Ihpone 12",
        precio: 210000,
        urlImagen: 'https://www.mylshop.com.ar/wp-content/uploads/2022/03/apple-iphone-12-128gb-verde.jpg',
        id: 4
    },
    {
        nombre: "Motorola one vision",
        precio: 115000,
        urlImagen: 'https://http2.mlstatic.com/D_NQ_NP_667419-MLA31651956517_082019-O.webp',
        id: 5
    },
    {
        nombre: "Motorola One Fusion Plus",
        precio: 180000,
        urlImagen: 'https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/70008437.jpg',
        id: 6
    },
    {
        nombre: "Samsung Galaxy Z3 Flit3 5G",
        precio: 225000,
        urlImagen: 'https://m.media-amazon.com/images/I/416fm1ITV6L._AC_SX425_.jpg',
        id: 7
    },
    {
        nombre: "Samsung Galaxy S21 FE 5G",
        precio: 172000,
        urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFj2NbQwxxyLWwiaL_gl-TaAb2a19K71nejexSyW6tTtfSvqHjevf_a4MUOR8GGW13ek&usqp=CAU',
        id: 8
    },
    {
        nombre: "Motorola Edge 20 Pro",
        precio: 90000,
        urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-T_h0Wyg4agZwuYGHUAdI88S5C_fQ09N9g&usqp=CAU',
        id: 9
    }
]);



module.exports = container;