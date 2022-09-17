const fs = require('fs')
const { readFile } = require('fs/promises')
const { threadId } = require('worker_threads')

class Container {
    constructor(file){
        this.file = file
    }

    save(object){

        const readProducts = async () => {
            try {
                await fs.readFile(this.file, 'utf-8', (error,contenido) => {
                    if (error){
                        console.log(error)
                    } else {
                        const fileData = contenido

                        //chequeo si esta vacio
                        if (!fileData || fileData === "[]"){
                            saveProducts(JSON.stringify([{id: 1, product: object}], null, 2))
                            return console.log("ID asignado: 1")
                        } else {

                            //grabo archivo parseadp
                            const parsedFileData = JSON.parse(fileData)

                            //encontrar id en array1
                            const newId = parsedFileData[parsedFileData.length -1].id + 1

                            //agrego nuevo objeto
                            parsedFileData.push({id: newId, product: object})

                            //salvo array a texto
                            saveProducts(JSON.stringify(parsedFileData, null, 2))

                            return console.log(`ID asignado: ${newId}`)
                        }
                    } 
                })

            } catch (error) {
                console.log(error)
            }
        }

        const saveProducts = async (dataToWrite) => {
            try {
                await fs.writeFile(this.file, dataToWrite , error => {
                    if (error){
                        console.log("Error no grabo")
                    } else {
                        console.log("Datos Guardados")
                    }
                })
            } catch (error) {
                this.products = []
                console.log("Error archivo en 0")
            }
        }

        readProducts()

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
        const readAllProducts = async () => {
            try {
                await fs.readFile(this.file, 'utf-8', (error,contenido) => {
                    if (error){
                        console.log(error)
                    } else {
                        const fileData = JSON.parse(contenido)
                        return console.log("todos los objetos son: ", fileData );
                    }
                })
            } catch (error) {

            }
        }

        readAllProducts()
    }

    deleteById(Number){
        
        const readProductsToDelete = async () => {
            try {
                await fs.readFile(this.file, 'utf-8', (error,contenido) => {
                    if (error){
                        console.log(error)
                    } else {
                        let fileData;
                        contenido ? fileData = JSON.parse(contenido) : null

                        fileData.forEach((element) => {
                            const index = fileData.indexOf(element);

                            if (element.id === Number){
                                
                                fileData.splice(index, 1)

                                saveProducts(JSON.stringify(fileData, null, 2))
                                console.log("Producto eliminado")

                            } else {
                                console.log(`No se encontraron productos con el Id: ${Number}`)
                            }
                        })

                    } 
                })

            } catch (error) {
                console.log(error)
            }
        }

        const saveProducts = async (dataToWrite) => {
            try {
                await fs.writeFile(this.file, dataToWrite , error => {
                    if (error){
                        
                        console.log(error)
                    } else {
                        console.log("Datos Guardados")
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }

        readProductsToDelete()
    }

    deleteAll(){
        const saveProducts = async () => {
            try {
                await fs.writeFile(this.file, "" , error => {
                    if (error){
                        console.log(error)
                    } else {
                        console.log("Datos Borrados")
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }

        saveProducts()
    }
}
// const deletaAll = new Container("./productos.txt").deleteAll()

const addProducts = new Container("./productos.txt").save("Motorola")

// const findID = new Container("./productos.txt").getById(23)

// const getAll = new Container("./productos.txt").getAll()

//  const deleteById = new Container("./productos.txt").deleteById(5)