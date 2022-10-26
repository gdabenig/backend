use ecommerce

db.createCollection("products")
db.createCollection("messages")

const messagesData = [
    {
        id: 1,
        email: "email1@gmail.com,
        message: "Hola, mensaje 1 de mongo",
        time: "2022-10-15 08:00:00"
    },
    {
        id: 2,
        email: "email2@gmail.com,
        message: "Hola mensaje 2 de mongo",
        time: "2022-10-15 08:00:00"
    },
    {
        id: 3,
        email: "email3@gmail.com,
        message: "Hola mensaje 3 de mongo",
        time: "2022-10-15 08:00:00"
    },
    {
        id: 4,
        email: "email4@gmail.com,
        message: "Hola mensaje 4 de mongo",
        time: "2022-10-15 08:00:00"
    },
    {
        id: 5,
        email: "email5@gmail.com,
        message: "Hola mensaje 5 de mongo",
        time: "2022-10-15 08:00:00"
    },
    {
        id: 6,
        email: "email6@gmail.com,
        message: "Hola mensaje 6 de mongo",
        time: "2022-10-15 08:00:00"
    },
    {
        id: 7,
        email: "email7@gmail.com,
        message: "Hola mensaje 7 de mongo",
        time: "2022-10-15 08:00:00"
    },
    {
        id: 8,
        email: "email8@gmail.com,
        message: "Hola mensaje 8 de mongo",
        time: "2022-10-15 08:00:00"
    },
    {
        id: 9,
        email: "email9@gmail.com,
        message: "Hola mensaje 9 de mongo",
        time: "2022-10-15 08:00:00"
    },
    {
        id: 10,
        email: "email20@gmail.com,
        message: "Hola mensaje 10 de mongo",
        time: "2022-10-15 08:00:00"
    }
]

const productsData = [
    {
        id: 1,
        title: "Producto 1",
        price: 100,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 10
    },
    {
        id: 2,
        title: "Producto 2",
        price: 200,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 20
    },
    {
        id: 3,
        title: "Producto 3",
        price: 300,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 30
    },
    {
        id: 4,
        title: "Producto 4",
        price: 400,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 40
    },
    {
        id: 5,
        title: "Producto 5",
        price: 500,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 50
    },
    {
        id: 6,
        title: "Producto 6",
        price: 600,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 60
    },
    {
        id: 7,
        title: "Producto 7",
        price: 700,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 70
    },
    {
        id: 8,
        title: "Producto 8",
        price: 800,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 80
    },
    {
        id: 9,
        title: "Producto 9",
        price: 900,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 90
    },
    {
        id: 10,
        title: "Producto 10",
        price: 1000,
        thumbnail: "https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp",
        stock: 100
    }
]

db.messages.insertMany(messagesData)
db.products.insertMany(productsData)

db.messages.find()
db.products.find()

db.messages.estimatedDocumentCount()
db.products.estimatedDocumentCount()

db.products.insertOne({
    title: "Producto 11",
    price: 1100,
    thumbnail: "https://images.samsung.com/my/smartphones/galaxy-s20/images/galaxy-s20-share-image.jpg",
    stock: 110
})

 db.products.find({price:{$gte:1000,$lte:3000}})
 db.products.find({price:{$gt:3000}})
 db.products.find().skip(2).limit(1).sort({price:1});

db.products.updateMany({}, {$set:{stock:100}})
db.products.updateMany({price:{$gt:4000}},{$set:{stock:0}})
db.products.deleteMany({price:{$lt:1000}})

db.createUser({ user:"gdabenig", pwd:"Once2837", roles:[{role:"read", db:"ecommerce" }] })

use ecommerce

db.products.find()
