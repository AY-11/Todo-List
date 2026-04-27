const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

// GET
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST
app.post("/todos", (req, res) => {
  todos.push(req.body);
  res.json(todos);
});

// PUT (update)


app.put("/todos/:index", (req, res) => {
  const index = Number(req.params.index);

  if (isNaN(index) || index < 0 || index >= todos.length) {
    return res.status(400).json({ error: "Invalid index" });
  }

  todos[index] = req.body;

  res.json(todos);
});
// DELETE
app.delete("/todos/:index", (req, res) => {
  console.log("DELETE HIT:", req.params.index);

  const index = Number(req.params.index);

  todos.splice(index, 1);

  res.json(todos);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});