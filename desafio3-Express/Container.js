const fs = require('fs')
const { readFile } = require('fs/promises')

module.exports = class Container {
    constructor(file){
        this.file = file

        try {
            this.products = fs.readFileSync(this.file, 'utf-8')
            this.products = JSON.parse(this.products) 
        } catch (error) {
            this.products = []
        }
    }



   

    getById(Id){

        const readId = async () => {
            try {
                await fs.readFile(this.file, 'utf-8', (error,contenido) => {
                    if (error){
                        console.log(error)
                    } else {
                        const fileData = JSON.parse(contenido)

                        let product

                        fileData.forEach(element => {
                            if (element.id === Id){
                                return product = element
                            }
                        })
                        product ? console.log("Producto encontrado:", product) : console.log(null);
                    }
                })
            } catch (error) {

            }
        }

        readId()
    }

    

    getAll(){
        console.log(this.products);
        return this.products
    }

    getRandomProduct(){
        let randomProduct = this.products[Math.floor(Math.random()* this.products.length)]
        return randomProduct
    }
 

       
}

