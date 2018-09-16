const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static("styles"));
app.use(express.static("img"));

app.use((req, res, next) => {
  let d = new Date();
  let hour = d.getHours();
  if (hour >= 8 && hour < 17) {
    next();
  } else {
    res.send("Our office is not open now");
  }
});

app.set("view engine", hbs);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/public/ourservices.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.listen(3000, err => {
  if (err) console.log("Error of listening on port 3000...");
  console.log("Listening on port 3000...");
});
