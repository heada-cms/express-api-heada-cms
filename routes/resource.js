const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { model } = mongoose;
const Resource = require('../model/resource')
const controller = require('../controller/index')
/* GET home page. */
router.route('/:name')
  .get(controller.get)
  .post(controller.post)


router.route('/:name/:id') 
  .delete(controller.delete)

module.exports = router;
