"use strict";

var expect = require("expect.js");

describe("models/tasks", function () {
  before(function () {
    return require("../models").sequelize.sync();
  });

  beforeEach(function () {
    this.User = require("../models").models.Users;
    this.Task = require("../models").models.Tasks;
    this.Project = require("../models").models.Projects;
  });

  describe("create", function () {
    it("creates a database", function () {
      return this.User.create({
        email: "bi@gmail.com",
        name: "bi",
        surname: "silly",
      })
        .bind(this)
        .then(function (user) {
          return this.Task.create({
            name: "third task",
            description: "description about third task",
            score: "30",
            status: "active",
          })
            .then(function (task) {
              expect(task.name).to.equal("third task");
            })
            .bind(this)
            .then(function (user) {
              return this.Project.create({
                name: "first project",
                body: "body of first project",
                status: "active",
              }).then(function (project) {
                expect(project.name).to.equal("first project");
              });
            });
        });
    });
  });
});
