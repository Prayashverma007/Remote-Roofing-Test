const { Router } = require("express");
const { createTask } = require("../../controllers/tasks");
const { Tasks } = require("../../models").models;
const route = Router();
const Sequelize = require("sequelize");

// GET /api/tasks
route.get("/", async (req, res) => {
  const { name = "", description = "", score = "", status = "" } = req.query;

  if (score.length == 0 || status.length == 0) {
    if (score.length == 0 && status.length == 0) {
      var whereClause = {
        name: { [Sequelize.Op.iLike]: `%${name}%` },
        description: { [Sequelize.Op.iLike]: `%${description}%` },
      };
    } else if (status.length == 0) {
      var whereClause = {
        name: { [Sequelize.Op.iLike]: `%${name}%` },
        description: { [Sequelize.Op.iLike]: `%${description}%` },
        score: { [Sequelize.Op.gt]: `${score}` },
      };
    } else {
      var whereClause = {
        name: { [Sequelize.Op.iLike]: `%${name}%` },
        description: { [Sequelize.Op.iLike]: `%${description}%` },
        status: `${status}`,
      };
    }
  } else {
    var whereClause = {
      name: { [Sequelize.Op.iLike]: `%${name}%` },
      description: { [Sequelize.Op.iLike]: `%${description}%` },
      score: { [Sequelize.Op.gt]: `${score}` },
      status: `${status}`,
    };
  }

  const tasks = await Tasks.findAll({
    where: whereClause,
  });

  if (!tasks) {
    return res.status(404).send({
      errors: {
        body: ["No Tasks Found"],
      },
    });
  }

  res.send(tasks);
});

// POST /api/tasks

route.post("/", async (req, res) => {
  let t = req.body.tasks;
  const tasks = await createTask(t.name, t.description, t.score, t.status);
  await tasks.save();
  res.send(tasks);
});

module.exports = { route };
