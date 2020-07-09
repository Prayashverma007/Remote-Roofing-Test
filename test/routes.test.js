let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server").app;

chai.should();

chai.use(chaiHttp);

describe("models/tasks", function () {
  before(function () {
    return require("../models").sequelize.sync();
  });

  beforeEach(function () {
    this.User = require("../models").models.Users;
    this.Task = require("../models").models.Tasks;
    this.Project = require("../models").models.Projects;
  });
  describe("GET /api/tasks", () => {
    it("It should GET all the tasks", (done) => {
      chai
        .request(server)
        .get("/api/tasks")
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });

    it("It should NOT GET all the tasks", (done) => {
      chai
        .request(server)
        .get("/api/task")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  describe("POST /api/tasks", () => {
    it("It should POST a new task", (done) => {
      const tasks = {
        name: "Task 12",
        description: "task description",
        score: 20,
        status: "active",
      };
      chai
        .request(server)
        .post("/api/tasks")
        .send(tasks)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have.property("name").eq("Task 1");
          response.body.should.have
            .property("description")
            .eq("task description");
          response.body.should.have.property("score").eq(20);
          response.body.should.have.property("status").eq(active);
          done();
        });
    });

    it("It should NOT POST a new user without the name property", (done) => {
      const tasks = {
        description: "desc",
      };
      chai
        .request(server)
        .post("/api/tasks")
        .send(tasks)
        .end((err, response) => {
          response.should.have.status(400);
          response.text.should.be.eq("name required");
          done();
        });
    });
  });

  describe("GET /api/users", () => {
    it("It should GET all the users", (done) => {
      chai
        .request(server)
        .get("/api/users")
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });

    it("It should NOT GET all the users", (done) => {
      chai
        .request(server)
        .get("/api/user")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  describe("POST /api/users", () => {
    it("It should POST a new user", (done) => {
      const task = {
        email: "johndoe@gmail.com",
        name: "john",
        surname: "doe",
      };
      chai
        .request(server)
        .post("/api/users")
        .send(task)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.have.property("email").eq("johndoe@gmail.com");
          response.body.should.have.property("name").eq("john");
          response.body.should.have.property("surname").eq("doe");
          done();
        });
    });

    it("It should NOT POST a new project without the email property", (done) => {
      const task = {
        name: "john",
      };
      chai
        .request(server)
        .post("/api/users")
        .send(task)
        .end((err, response) => {
          response.should.have.status(400);
          response.text.should.be.eq("Not null defined");
          done();
        });
    });
  });

  describe("GET /api/projects", () => {
    it("It should GET all the projects", (done) => {
      chai
        .request(server)
        .get("/api/projects")
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });

    it("It should NOT GET all the projects", (done) => {
      chai
        .request(server)
        .get("/api/project")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  describe("POST /api/projects", () => {
    it("It should POST a new project", (done) => {
      const project = {
        name: "johnyy",
        body: "johnyy body",
        status: "inactive",
      };
      chai
        .request(server)
        .post("/api/projects")
        .send(project)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have.property("name").eq("johnyy");
          response.body.should.have.property("body").eq("johnyy body");
          response.body.should.have.property("status").eq("inactive");
          done();
        });
    });

    it("It should NOT POST a new task without the name property", (done) => {
      const project = {
        body: "john body",
      };
      chai
        .request(server)
        .post("/api/projects")
        .send(project)
        .end((err, response) => {
          response.should.have.status(400);
          response.text.should.be.eq("Not null defined");
          done();
        });
    });
  });
});
