var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var bodyparser = require("body-parser");
var Car = require("./models/car");
var app = express();

//database setup
mongoose.connect(
  "mongodb://localhost/Mani",
  { useNewUrlParser: "true" }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// DEMO BRAND
// var stuff = new Car({
//   brand: "Jaguar",
//   name: ["Jaguar XE"],
//   image: [
//     "https://imgd.aeplcdn.com/0x0/cw/ec/14152/Jaguar-XE-Right-Front-Three-Quarter-65731.jpg?v=201711021421"
//   ],
//   Price1: "1000",
//   Price2: "500",
//   Price3: "100"
// });
// stuff.save(function(err, Car) {
//   if (err) {
//     console.log("error");
//   } else {
//     console.log("We just saved something");
//     console.log(Car);
//   }
// });

module.exports = app;
