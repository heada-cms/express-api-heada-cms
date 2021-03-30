const connection = require('../database/index')()
const { Schema } =require('mongoose')

const resourceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    schema: {
        type: String, //stringified JSON
        required: true
    }
})

module.exports = () => connection.then(conn => conn.model("Resource", resourceSchema))