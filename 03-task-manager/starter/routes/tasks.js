const express = require('express');
const router = express.Router();

// const {
//     getAllTasks,
//     createTask,
//     getTask,
//     updateTask,
//     deleteTask
// } = require('../controllers/tasks');
const t = require('../controllers/tasks');

router.route('/')
    .get(t.getAllTasks)
    .post(t.createTask);
router.route('/:id')
    .get(t.getTask)
    .patch(t.updateTask)
    .delete(t.deleteTask);

module.exports = router;
