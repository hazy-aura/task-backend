const express = require('express');
const router = express.Router();
const controller = require('../controllers/board');

router.get('/boards', controller.getBoards);
router.post('/boards', controller.createBoard);
router.get('/boards/:id/tasks', controller.getTasks);
router.post('/boards/:id/tasks', controller.createTask);

module.exports = router;
