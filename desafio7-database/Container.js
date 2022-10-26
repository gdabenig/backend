const knex = require('knex')
const { options } = require('./options/connectOptions')

// createDb()


module.exports = class Container {
    constructor(options, table) {
        this.knex = knex(options)
        this.table = table
    }

    async getAll() {
        try {
            return JSON.parse(JSON.stringify(await this.knex.from(this.table).select('*')));;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            return JSON.parse(JSON.stringify(await this.knex.from(this.table).select('*').where('id', '=', parseInt(id))))
        } catch (error) {
            console.log(error);
        }
    }

    async addProduct(productAdded) {
        try {
            return this.knex(this.table).insert(productAdded)
        } catch (error) {
            console.log(error)
        }
    }

    async editById(id, productEdited) {
        try {
            await this.knex.from(this.table).where('id', '=', id).update(productEdited)
            return {
                msj: "producto modificado"
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id) {
        try {
            await this.knex.from(this.table).where(id).del()
            return {
                msj: "producto dado de baja"
            }
        } catch (error) {

        }
    }
}



function createDb() {  
    knex(options.mysql).schema.createTable('productos', tables => {
        tables.increments('id')
        tables.string('product')
        tables.string('value')
        tables.string('urlImg')
    }).then(() => {
        console.log("table created");
    }).catch((error) => {
        console.log(error); throw error;
    }).finally(() => {
        knex(options.sqlite).destroy()
    })

    knex(options.mysql).from('productos').insert(
        [


        {
                product: "Samsung S10",
                value: 93000,
                urlImg: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp"
            },
            {
                product: "Samsung galaxy S20",
                value: 170000,
                urlImg: "https://images.samsung.com/my/smartphones/galaxy-s20/images/galaxy-s20-share-image.jpg"
            }
                  
        ]
    ).then(() => {
        console.log("producto dado de alta");
    }).catch((error) => {
        console.log(error); throw error;
    }).finally(() => {
        knex(options.sqlite).destroy()
    })
}
