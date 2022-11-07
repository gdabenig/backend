import ContenedorFirebase from '../../containers/contenedorFirebase.js'

export default class ProductosDaoFirebase extends ContenedorFirebase {
    constructor(){
        super('productos')
    }
}
