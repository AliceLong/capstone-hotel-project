#!/usr/bin/env node
const express = require("express");
const app = express(); // instantiate an Express object
const cors = require("cors");
require("dotenv").config({ silent: true }); // load environmental variables from a hidden file named .env
const port = process.env.PORT; // the port to listen to for incoming requests

app.use("/uploads", express.static("uploads"));

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

const formRoute = require("./routes/Form");
app.use("/form", formRoute);

// Start the Express server
let server;
try {
  server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} catch (error) {
  console.error(`Error occurred while starting the server: ${error}`);
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// a function to stop listening to the port
const close = async () => {
  server.close();
};

module.exports = { app, close };
