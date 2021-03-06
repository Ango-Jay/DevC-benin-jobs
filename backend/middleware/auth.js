const jwt = require("jsonwebtoken");

// AUTHENTICATON MIDDLEWARE
const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  //check for token
  if (!token) {
    return res.status(401).json({ msg: "no token authoriazation denied" });
  }
  try {
    //verify token
    const decoded = jwt.verify(token, process.env.jwtSecret);
    //add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "token is not valid" });
  }
};

module.exports = auth;
