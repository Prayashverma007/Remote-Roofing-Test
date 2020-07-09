const { Tasks } = require("../models").models;
async function createTask(name, description, score, status) {
  if (!name) {
    return new Error("Name missing");
  }

  const newTask = await Tasks.create({
    name,
    description,
    score,
    status,
  });

  const task = await Tasks.findOne({
    attributes: ["description", "name", "score", "status"],
    where: { name: newTask.name },
  });

  return task;
}

module.exports = {
  createTask,
};
