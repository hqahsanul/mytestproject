const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  query: String,
});

app.listen(3000, function () {
  console.log("Server has started at port 3000");
});
