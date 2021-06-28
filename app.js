const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.routes");
require("./model/connection")
app.use(express.static("public"));

app.use(userRoutes);

  module.exports = app;