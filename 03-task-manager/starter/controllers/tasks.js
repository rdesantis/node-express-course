const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const CustomAPIError = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
});

const getTask = asyncWrapper(async (req, res, next) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    if (!task) {
        return next(new CustomAPIError(`Task with id ${id} not found`, 404));
    }
    res.status(200).json({task});
});

const updateTask = asyncWrapper(async (req, res, next) => {
    const {id} = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return next(new CustomAPIError(`Task with id ${id} not found`, 404));
    }
    res.status(200).json({task});
});

const deleteTask = asyncWrapper(async (req, res, next) => {
    const {id} = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
        return next(new CustomAPIError(`Task with id ${id} not found`, 404));
    }
    res.status(200).json({task});
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};
