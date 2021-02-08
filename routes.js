// init cloudant
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getTasks);
router.post('/', controller.createTask);
router
  .route("/tasks/:id")
  .get(controller.getTask)
  .post(controller.editTask);

router.route("/remove/:id").get(controller.removeTask);


module.exports = router;