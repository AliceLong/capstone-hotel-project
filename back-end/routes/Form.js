const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  res.send("Hello from the form route!");
});

router.post("/submit", (req, res) => {
  const formData = req.body;
  console.log(formData);

  // Create a new object with the form data, the user ID, and the submission time
  const newUser = {
    userId: uuidv4(),
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    reserveType: formData.reserveType,
    submissionTime: new Date(), // Add this line
  };

  // Convert the newUser object to JSON
  const json = JSON.stringify(newUser, null, 2);

  // Write the JSON to userData.json
  fs.writeFile("./data/userData.json", json, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.status(500).json({ message: "Error saving form data" });
    } else {
      console.log("Form data saved to userData.json");
      res.json({ message: "Form submitted successfully" });
    }
  });
});

module.exports = router;
