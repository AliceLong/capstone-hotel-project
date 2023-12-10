// routes/Form.js

const express = require("express");
const router = express.Router();

// Define your route handlers
router.get("/", (req, res) => {
  // Handle GET request for /form
  res.send("Hello from the form route!");
});

router.post("/submit", (req, res) => {
  // Handle POST request for /form/submit
  // Access the form data from req.body
  const formData = req.body;
  // Process the form data as needed
  // ...

  // Send a response
  res.json({ message: "Form submitted successfully" });
});

// Export the router
module.exports = router;
