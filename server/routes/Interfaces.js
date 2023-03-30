const express = require("express");
const router = express.Router();

const interfaces = require("../controllers/interfaces.js");

// Retrieve all interfaces
router.get("/", interfaces.findAll);

// Retrieve a single interface with id
router.get("/:id", interfaces.findOne);

// Add a new interface
router.post("/add", interfaces.add);

module.exports = router;
