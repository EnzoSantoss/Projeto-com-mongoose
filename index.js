const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const conn = require("./db/conn.js");
const routes = require("./routes/appRoutes");
const appController = require("./controllers/appController");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/app", routes);

app.get("/", appController.home);

app.listen(3000);
