const mongoose = require("mongoose");
//define Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  location: [
    {
      country: { type: String, trim: true },
      city: { type: String, trim: true },
    },
  ],
  skillSet: [{ type: String, trim: true }],
  socialMedia: [{ type: String, trim: true }],
  phoneNumber: { type: Number },
  role: { type: String },
});

//create model
const User = mongoose.model("user", userSchema);

module.exports = User;
