const express = require("express");

const router = express.Router();
const authController = require("../../controllers/authController");
const auth = require("../../middleware/auth");

// Get user data AUTH
router.get("/user", auth, authController.get_userdata);

// create new user
router.post("/", authController.post_user);

/* Update user  */
//skillSet
router.put("/update/set_skill", authController.update_user_skill);
// SocialAccnts
router.put("/update/set_social", authController.update_user_social);

module.exports = router;
