require("dotenv").config();
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// Routes
const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

// Error handling
require("./error-handling")(app);

module.exports = app;
