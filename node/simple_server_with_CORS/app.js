const express = require("express");
const cors = require('cors');

const app = express();
const port = 3130;

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("TRACER Hello World! OCT 2020");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
