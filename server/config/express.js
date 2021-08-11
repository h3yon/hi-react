const express = require("express"); //bodyparser, qs 등을 사용.
const compression = require("compression");
const methodOverride = require("method-override");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV == "production" ? ".env" : ".env.local"),
});

module.exports = function () {
  const app = express();

  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); // bodyparser -> express (body속성)
  app.use(methodOverride());
  app.use(cors());

  require("../src/Post/postRoute")(app);

  return app;
};
