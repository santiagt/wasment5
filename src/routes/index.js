const express = require("express");
const path = require("path");

const app = express();

app.set("views", "../views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index.pug");
});

app.get("/qwe", (req, res) => {
  res.send("qweqweqwe");
});

app.use(express.static(path.join(__dirname + "./public")));
app.listen(8080);
