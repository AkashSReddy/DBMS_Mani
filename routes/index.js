var express = require("express");
var router = express.Router();
var Car = require("../models/car");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("login", { title: "DBMS Project" });
});
router.post("/", (req, res, next) => {
  if (
    (req.body.email == "abc@gmail.com" && req.body.password == "1234567890") ||
    (req.body.email == "mani@gmail.com" && req.body.password == "mani")
  ) {
    res.redirect("/car");
  } else {
    res.redirect("/");
  }
});
router.get("/car", (req, res, next) => {
  Car.find({}, (err, data) => {
    res.render("index", { title: "DBMS Project", data: data });
  });
});

router.get("/id", (req, res, next) => {
  res.render("method", { title: "DBMS Project" });
});

router.get("/payment", (req, res, next) => {
  res.render("payment", { title: "DBMS Project" });
});

router.get("/:brand", (req, res, next) => {
  var idd = req.path;
  idd = idd.substr(1);
  Car.find({ brand: idd }, (err, data) => {
    console.log(idd);
    console.log(data);
    res.render("name", { title: "DBMS Project", data: data });
  });
});

module.exports = router;
