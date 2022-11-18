import Task from "../models/Task";

export const findAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, done } = req.body;
  const task = { title, description };
  if (done) task.done = done;
  const newTask = new Task(task);
  const taskSaved = await newTask.save();
  res.json(taskSaved);
};
