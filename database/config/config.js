const dotenv = require("dotenv");

dotenv.config({ path: "./.env"});

module.exports = {
  "development": {
    "database": process.env.DATABASE,
    "username": process.env.USER_DATABASE || "root",
    "password": process.env.PASSWORD_DATABASE || null,
    "host": process.env.HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "database": process.env.DATABASE_TEST,
    "username": process.env.USER_DATABASE_TEST || "root",
    "password": process.env.PASSWORD_DATABASE_TEST || null,
    "host": process.env.HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "database": process.env.DATABASE_PRODUCTION,
    "username": process.env.USER_DATABASE_PRODUCTION || "root",
    "password": process.env.PASSWORD_DATABASE_PRODUCTION || null,
    "host": process.env.HOST || "127.0.0.1",
    "dialect": "mysql"
  }
}
