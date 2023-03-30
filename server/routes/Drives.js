const express = require("express");
const router = express.Router();

const drives = require("../controllers/drives.js");

// Retrieve all drives
router.get("/", drives.findAll);

// Retrieve a single drive with id
router.get("/:id", drives.findOne);

// Add a new drive
router.post("/", drives.add);

// Update a drive with id
router.put("/:id", drives.update);

module.exports = router;
