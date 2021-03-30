const connectionFactory = require('../database/index')
const resourceModelFactory = require('../model/resource')
const { Schema } = require('mongoose')


async function GenerateModel(name) {
    const connection = await connectionFactory()
    if (connection.models[name]) {
        return connection.models[name]
    }
    const resourceModel = await resourceModelFactory();

    const resource = await resourceModel.findOne({name: name}).lean().exec()

    const parsedSchema = JSON.parse(resource.schema)

    const model = connection.model(resource.name, new Schema(parsedSchema))
    return model;
}

module.exports={GenerateModel}