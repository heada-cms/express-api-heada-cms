const router = require('express').Router();
const controller = require('../controller/resourceType')

router.route('/')
    .get(controller.getResourceTypes)
    .post(controller.addResourceType)


module.exports = router;