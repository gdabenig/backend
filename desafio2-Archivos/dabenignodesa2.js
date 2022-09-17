const fs = require('fs')
const data = require('./productos.txt');

class Contenedor {
    constructor(rutaArchivo){
        this.rutaArchivo = rutaArchivo
        
    }

    async #leerUnArchivo(){
        try {
            const contenido = await fs.promises.readFile(this.rutaArchivo, 'utf-8')
            const contenidoParseado = JSON.parse(contenido)
            return contenidoParseado
        } catch (error) {
            console.log(error)
        }
        
    }
    
    async save(obj){ 
        const contenidoArchivo =  await this.#leerUnArchivo()
        if (contenidoArchivo.length !== 0) {
            console.log(contenidoArchivo)
            await fs.promises.writeFile(this.rutaArchivo,JSON.stringify([...contenidoArchivo, {...obj, id: contenidoArchivo[contenidoArchivo.length - 1].id + 1}], null, 2), 'utf-8')
        } else {            
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify( [ {...obj, id: 1} ]), 'utf-8')
        }

    }

    async getById(id){ 
        try {
            const fileContent = await this.#leerUnArchivo();
            const fileCopy = Array.from(fileContent);
            const element = fileCopy.findIndex(obj => obj.id === id);
            if (fileContent.filter(e => e.id === id)) {
                fileCopy.splice(element, 1);
                console.log("id encontrado");
            } else {
                throw Error('Elemento no encontrado');
            }
        } catch(error) {
            console.log(error);
        }
    }

    async getAll(){ 
        const contenidoArchivo =  await this.#leerUnArchivo()
          console.log(contenidoArchivo)
    }
     
    async deleteById(id) {
        try {

            const fileContent = await this.#leerUnArchivo();
            const fileCopy = Array.from(fileContent);
            const element = fileCopy.findIndex(obj => obj.id === id);
            if (fileContent.filter(e => e.id === id)) {
                fileCopy.splice(element, 1);
                await fs.promises.writeFile(this.file, JSON.stringify([...fileCopy], null, 2), 'utf-8');
            } else {
                throw Error('Elemento no encontrado');
            }
        } catch(error) {
            console.log(error);
        }
    }
async deleteAll() {
    try {
      await fs.promises.writeFile(this.rutaArchivo, []);
      console.log('Borrar todos los productos');
    } catch (error) {
      throw new Error(error, 'Error no se dieron de baja todos los productos');
    }
  }



}

const contenedor = new Contenedor('./productos.txt')



 contenedor.save(data);
 contenedor.getById(7);
 contenedor.deleteById(7);

 contenedor.deleteAll();
 contenedor.getAll();
 