const Board = require('../models/board');
const Task = require('../models/task');

exports.getBoards = async (req, res) => {
  const boards = await Board.find();
  res.json(boards);
};

exports.createBoard = async (req, res) => {
  const board = new Board({ name: req.body.name });
  await board.save();
  res.status(201).json(board);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ boardId: req.params.id });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = new Task({ ...req.body, boardId: req.params.id });
  await task.save();
  res.status(201).json(task);
};
