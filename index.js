const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Emma" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Henry" },
  { id: 9, name: "Ivy" },
  { id: 10, name: "Jack" },
];

// Home Route
app.get("/", (req, res) => {
  res.send("Hello, Render!");
});

// Users Route - Returns 10 Users
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
