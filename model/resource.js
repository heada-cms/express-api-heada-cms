const { Schema, model } = require('mongoose');


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

module.exports = model("Resource", resourceSchema);