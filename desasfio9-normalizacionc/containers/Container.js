const mongoose = require('mongoose')
const { options } = require('../options/connectOptions')
const { ProductsModel } = require("../models/products")

// createDb()
module.exports = class Container {
    constructor() {
        this.Model = ProductsModel
        this.connect()
    }

    connect() {
        try {
            mongoose.connect(options.mongoDb.connection, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log('Mongo db connected');
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            let products = await this.Model.find()
            return products
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            let products = await this.Model.find({ _id: id })
            return products
        } catch (error) {
            console.log(error);
        }
    }

    async addProduct(productAdded) {
        console.log(productAdded);
        try {
            const newProduct = new this.Model(productAdded)
            await newProduct.save()
            return { status: "product added" }
        } catch (error) {
            console.log(error);
        }
    }

    async editById(id, params) {
        try {
            await this.Model.updateOne({ _id: id }, { $set: params })
            return { status: "modified" }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            await this.Model.deleteOne({ _id: id })
            return { status: `Product ${id} deleted`}
        } catch (error) {
            console.log(error);
        }
    }

    async deleteall() {
        try {
            await this.Model.deleteMany({})
        } catch (error) {
            
        }
    }
}



