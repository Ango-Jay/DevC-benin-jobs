const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const chalk = require("chalk");
const userApi = require("./routes/api/users");
const authApi = require("./routes/api/auth");
const adminRoute = require("./routes/admin");

const { PORT } = process.env;
const app = express();
const localhost = "127.0.0.1";

// allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//read from body
app.use(express.json());

/* Database Config */
//defualt mongoose connection
const mongoDB = process.env.mongoURI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//get defualt connection
const db = mongoose.connection;

//bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//success
db.once("open", () => {
  console.log("Connected");
});
/* Database Config */

//routes
app.use("/admin", adminRoute); // ADMIN
// api routes
app.use("/api/users", userApi);
app.use("/api/auth", authApi);

app.listen(PORT, () => {
  console.log(chalk.green.bold(`The magic happens on ${localhost}:${PORT}`));
});

module.exports = app;
