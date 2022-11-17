const options = {
    mysql: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'ecommerce'
        }
    },
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: "./DB/ecommerce.sqlite"
        },
        userNullAsDefault: true
    },
    mongoDb: {
        connection: "mongodb+srv://gdabenig:<milagros2011>@cluster0.xtm8cc5.mongodb.net/?retryWrites=true&w=majorit"
    }
}

module.exports = {
    options
}

