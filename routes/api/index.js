const { Router } = require("express");

const projectsRoute = require("./projects").route;
const usersRoute = require("./users").route;
const tasksRoute = require("./tasks").route;

const route = Router();

route.use("/projects", projectsRoute);
route.use("/tasks", tasksRoute);
route.use("/users", usersRoute);

module.exports = { route };
