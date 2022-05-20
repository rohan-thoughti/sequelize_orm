const express = require("express");
const app = express();
const body = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(body.urlencoded({ extended: true }));

const port = 4000;

const routes = require("./routes/index");
app.use("/", routes);

app.get("/", (req, res) => {
  console.log("HOME");
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Test app Listening to ${port}`);
});
