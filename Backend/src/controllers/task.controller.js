const Task = require("../models/task.model");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id,
  });

  res.status(201).json(task);
};

// exports.getTasks = async (req, res) => {
//   const tasks = await Task.find({ user: req.user.id });
//   res.json(tasks);
// };

exports.getTasks = async (req, res) => {
  let tasks;

  if (req.user.role === "admin") {
    tasks = await Task.find().populate("user", "email");
  } else {
    tasks = await Task.find({ user: req.user.id });
  }

  res.json(tasks);
};


exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (task.user.toString() !== req.user.id)
    return res.status(403).json({ message: "Not authorized" });

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;

  await task.save();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (
    task.user.toString() !== req.user.id &&
    req.user.role !== "admin"
  )
    return res.status(403).json({ message: "Not authorized" });

  await task.deleteOne();
  res.json({ message: "Task deleted" });
};
