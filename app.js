const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello renjith! CI/CD Pipeline Deployed This App🚀");
});

app.get("/version", (req, res) => {
  res.send("Version 1.0");
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
