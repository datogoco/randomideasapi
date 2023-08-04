const express = require("express");
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the RandomIdeas API" });
});

const ideasRouter = require("./routs/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Server Listening on Port ${port}`));

// Set-ExecutionPolicy Default -Scope CurrentUser
