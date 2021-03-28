const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { model } = mongoose;
const generator = require('mongoose-gen')
const Resource = require('../model/resource')
/* GET home page. */
router.get('/:name', async (req, res) => {
  const name = req.params.name;

  const resource = await Resource.findOne({name: name}).lean().exec();
  console.log(resource.schema)
  const parsedSchema = JSON.parse(resource.schema);
  console.log(parsedSchema)
  //const converted = generator.convert(parsedSchema);
  //console.log(converted)
  const schema = new mongoose.Schema(parsedSchema)
  console.log(schema)
  const Model = model(resource.name, schema);
  res.send(await Model.find({}).lean().exec())


});


router.post('/:name', async (req, res) => {
  const name = req.params.name;

  const resource = await Resource.findOne({name: name}).lean().exec();
  console.log(resource.schema)
  const parsedSchema = JSON.parse(resource.schema);
  console.log(parsedSchema)
  //const converted = generator.convert(parsedSchema);
  //console.log(converted)
  const schema = new mongoose.Schema(parsedSchema)
  console.log(schema)
  const Model = model(resource.name, schema);

  const payload = req.body;

  res.send(await new Model(payload).save())
})

module.exports = router;
