const { Router } = require("express");
const { createUser } = require("../../controllers/users");
const { Users } = require("../../models").models;
const route = Router();
const Sequelize = require("sequelize");

//POST /api/users
route.post("/", async (req, res) => {
  let u = req.body.user;
  const user = await createUser(u.email, u.name, u.surname);
  await user.save();
  res.send(user);
});

//GET /api/users
route.get("/", async (req, res) => {
  const { email = "", name = "", surname = "" } = req.query;

  const whereClause = {
    email: { [Sequelize.Op.iLike]: `%${email}%` },
    name: { [Sequelize.Op.iLike]: `%${name}%` },
    surname: { [Sequelize.Op.iLike]: `%${surname}%` },
  };
  const users = await Users.findAll({
    where: whereClause,
  });

  if (!users) {
    return res.status(404).send({
      errors: {
        body: ["No Users Found"],
      },
    });
  }

  res.send(users);
});

module.exports = {
  route,
};
