const router = require('express').Router();
const controller = require('../controller/resource')

router.route('/')
    .get(controller.getResources)
    .post(controller.addResource)


module.exports = router;