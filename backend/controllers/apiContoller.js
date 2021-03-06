const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

/*USER API CONTROLLERS*/

// REGISTER NEW USER
exports.post_user = (req, res) => {
  const { name, email, password } = req.body;

  //Validation

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });
    //create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          throw err;
        }
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            process.env.jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) {
                throw err;
              }
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  location: user.location,
                  skillSet: user.skillSet,
                  socialMedia: user.socialMedia,
                  phoneNumber: user.phoneNumber,
                  role: user.role,
                },
              });
            }
          );
        });
      });
    });
  });
};
