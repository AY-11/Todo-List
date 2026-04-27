const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// ADD todo
app.post("/todos", (req, res) => {
  todos.push(req.body);
  res.json(todos);
});

// UPDATE todo
app.put("/todos/:index", (req, res) => {
  const index = Number(req.params.index);

  if (index < 0 || index >= todos.length) {
    return res.status(404).json({ error: "Invalid index" });
  }

  todos[index] = req.body;
  res.json(todos);
});

// DELETE todo
app.delete("/todos/:index", (req, res) => {
  const index = Number(req.params.index);

  if (index < 0 || index >= todos.length) {
    return res.status(404).json({ error: "Invalid index" });
  }

  todos.splice(index, 1);
  res.json(todos);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});