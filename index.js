const express = require("express");
// const bodyParser = require("bodyParser");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login", {});
});

app.get("/signup", (req, res) => {
    res.render("signup", {});
});

app.post("/signup", (req, res) => {
    console.log(req.body.password);
    res.redirect("/signup");
});

app.listen(port, () => {
    console.log("Server is Running on Localhost " + port);
});
