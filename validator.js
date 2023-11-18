const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});


app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(5000,()=>{
  console.log("server is running")
});