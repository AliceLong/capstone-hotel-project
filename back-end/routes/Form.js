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

  const newUser = {
    userId: uuidv4(),
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    reserveType: formData.reserveType,
    submissionTime: new Date(),
  };

  fs.readFile("./data/userData.json", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ message: "Error reading existing data" });
    }

    // Parse the existing data
    let existingData;
    try {
      existingData = JSON.parse(data);
    } catch {
      existingData = [];
    }

    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    // Add the new user to the existing data
    existingData.push(newUser);

    // Convert the data back to JSON
    const json = JSON.stringify(existingData, null, 2);

    // Write the JSON back to userData.json
    fs.writeFile("./data/userData.json", json, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Error saving form data" });
      }

      console.log("Form data saved to userData.json");
      res.json({ message: "Form submitted successfully" });
    });
  });
});
module.exports = router;
