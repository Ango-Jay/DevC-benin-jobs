const express = require("express");

const router = express.Router();
const apiContoller = require("../../controllers/apiContoller");

// Create New User
router.post("/", apiContoller.post_user);

module.exports = router;
