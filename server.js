const express = require("express");
const models = require("./models");
const apiRoute = require("./routes/api").route;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoute);

models.sequelize.sync().then(() => {
  app.listen(5004, () => {
    console.log("Server Started");
  });
});

module.exports = {
  app,
};
