const {GenerateModel} = require("../model/modelTemplate");

module.exports.get = async (req, res) => {
    const model =  await GenerateModel(req.params.name)

    res.send(await model.find().exec())
    
}

module.exports.post = async (req, res) => {
    const model = await GenerateModel(req.params.name);

    res.send(await new model(req.body).save());
}

module.exports.delete = async (req, res) => {
    const model = await GenerateModel(req.params.name);
    const id = req.params.id;

    res.send(await model.findByIdAndDelete(id).lean().exec())
}