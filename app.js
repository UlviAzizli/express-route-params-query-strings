// app.js
const express = require("express");
const logger = require("morgan");

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));

// ROUTES

// Example - Query Strings (?)
app.get("/search", (req, res) => {
  console.log("req.query -> ", req.query);
  res.json(req.query);
});

// Example - Route Parameters (:)
app.get("/accounts/:username", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

app.get("/users/:username", (req, res) => {
  console.log(req.params);

  res.json(req.params);
});

app.get("/books/:bookId/details", (req, res, next) => {
  console.log("req.params -> ", req.params);
  res.json(req.params);
});

app.get("/users/:username/books/:bookId", (req, res, next) => {
  console.log("req.params -> ", req.params);

  res.json(req.params);
});

app.get("/results", (req, res, next) => {
  console.log("req.query -> ", req.query);
  res.json(req.query);
});

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => console.log("App listening on port 3000!"));
