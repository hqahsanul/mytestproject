const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/contactDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const usersSchema = new mongoose.Schema({
  email: String,
  name: String,
  query: String,
});

const User = mongoose.model("User", usersSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/form.html");
});

app.post("/", function (req, res) {
  const emailName = req.body.email;
  const userName = req.body.name;
  const queryName = req.body.query;
  console.log(emailName);

  const user = new User({
    email: emailName,
    name: userName,
    query: queryName,
  });

  user.save();
  //console.log("Done");
  res.sendFile(__dirname + "/done.html");

  //User.find(function (err, users) {
  //  if (err) {
  //  console.log(err);
  //  } else {
  //  users.forEach(function (user) {
  //    console.log(user.name);
  //  });
  //  }
  // });
});

app.listen(3000, function () {
  console.log("Server has started at port 3000");
});
