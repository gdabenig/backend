const { options } = require('./options/connectOptions')
const knex = require('knex')(options.sqlite)

// createDb()

module.exports = class Chat {
    constructor(table) {
        this.table = table
    }
    async getMsj() {
        try {
            return JSON.parse(JSON.stringify(await knex.from(this.table).select('*')));;
        } catch (error) {
            console.log(error);
        }
    }

    async addMsj(newMsj) {
        try {
            return await knex.from(this.table).insert(newMsj)
        } catch (error) {
            console.log(error);
        }
    }
}

function createDb() {
    knex.schema.createTable('chat', tables => {
        tables.increments('id')
        tables.string('name')
        tables.string('message')
        tables.string('date')
    }).then(() => {
        const WelcomeMessage =
        {
            "name": "Servidor",
            "message": "Deje su mensaje a ahora",
            "date": "19/10/2022, 08:47:37"
        }


        knex.from('chat').insert(WelcomeMessage)
            .then(() => {
                console.log("Mensaje agregado");
            }).catch((err) => {
                console.log(error);
            }).finally(() => {
                knex.destroy()
            });
        console.log("tabla creada");
    }).catch((error) => {
        console.log(error); throw error;
    }).finally(() => {
        knex.destroy()
    })
}