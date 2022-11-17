import ContenedorMongoDb from '../../containers/contenedorMongoDb.js'

export default class ProductosDaoMongoDb extends ContenedorMongoDb {
    constructor(){
        super('productos')
    }
}
