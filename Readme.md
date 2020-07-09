## Setup

### Installing Dependencies

```npm install express sequelize mocha```

### Setting Up Database

Follow the postgresql guidelines, [download](https://www.postgresql.org/download/) an install postgres v9.6.

**Create Database**

```bash
psql -U postgres
> create database roofing;
> \q
```
and assign user and password to it as per your choice

**Run Migrations**

```bash
npx sequelize db:migrate
```

### Seed Users

```bash
npx sequelize-cli db:seed:all
```

### Running Development Server

Run ```node server.js```
```bash
Open [http://localhost:5343](http://localhost:5343) with your browser to see the result and start posting query through `Postman` or through your browser.
```
### Testing

My code coverage is 70% and you can run the test using `npm test`
