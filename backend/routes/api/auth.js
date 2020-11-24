const express = require("express");

const router = express.Router();
const authController = require("../../controllers/authController");
const auth = require("../../middleware/auth");

/* GET userData
private route
*/
router.get("/user", auth, authController.get_userdata);
/* UPDATE ROUTES */
// Skill
router.put("/update/set_skill", authController.update_user_skill);
// SocialAccnts
router.put("/update/set_social", authController.update_user_social);
//POST user
//create user
//public
router.post("/", authController.post_user);

module.exports = router;
