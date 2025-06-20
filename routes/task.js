const express = require('express');
const router = express.Router();
const controller = require('../controllers/task');

router.put('/tasks/:id', controller.updateTask);
router.delete('/tasks/:id', controller.deleteTask);

module.exports = router;
