const express = require("express");
const app = express();
const port = process.env.port || 8080;
console.log("log on startup");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
