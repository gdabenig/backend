const mongoose = require('mongoose')

class Connect {
    constructor(model) {
        this.connect()
        this.model = model
    }

    connect() {
        try {
                }
            const URL = 'mongodb+srv://gdabenig:milagros2011@cluster0.7lls3u0.mongodb.net/?retryWrites=true&w=majority'
            mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log('Database connected')
        } catch (error) {
                console.log(error)
            }
        }
    }

    const options = {
        mysql: {
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'test'
            }
        },
        sqlite: {
            client: 'sqlite3',
            connection: {
                filename: './database/mydb.sqlite'
            },
            useNullAsDefault: true
        }
    }

    module.exports = { options, Connect}