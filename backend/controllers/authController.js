const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

/*USER API CONTROLLERS*/
exports.get_userdata = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.json(user);
    });
};

exports.update_user_skill = (req, res) => {
  const { id } = req.query;
  const { skillSet } = req.body;
  const query = User.findById(id);
  query.then((user) => {
    user.skillSet.addToSet(skillSet);
    user.markModified("skillSet");
    user
      .save()
      .then((user) => {
        res.json({
          user: {
            name: user.name,
            email: user.email,
            location: user.location,
            skillSet: user.skillSet,
            socialMedia: user.socialMedia,
            phoneNumber: user.phoneNumber,
            role: user.role,
          },
        });
      })
      .catch((e) => {
        res.json({ msg: e });
      });
  });
};

exports.update_user_social = (req, res) => {
  const { id } = req.query;
  const { socialMedia } = req.body;
  const query = User.findById(id);
  query.then((user) => {
    user.socialMedia.addToSet(socialMedia);
    user.markModified("socialMedia");
    user
      .save()
      .then((user) => {
        res.json({
          user: {
            name: user.name,
            email: user.email,
            location: user.location,
            skillSet: user.skillSet,
            socialMedia: user.socialMedia,
            phoneNumber: user.phoneNumber,
            role: user.role,
          },
        });
      })
      .catch((e) => {
        res.json({ msg: e });
      });
  });
};

exports.post_user = (req, res) => {
  const { email, password } = req.body;

  //Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: "User does not exists" });
    }

    //validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ msg: "invalid credentials" });
      }
      jwt.sign(
        { id: user.id },
        process.env.jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token, user });
        }
      );
    });
  });
};
