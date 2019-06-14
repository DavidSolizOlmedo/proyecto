const mongoose = require("./connect");
var USERSCHEMA = {
  name :  String,
  lastname : String,
  email : String,
  register : Date,
  password : String,
  cel : String,
  ubication: Number
}
const USER = mongoose.model("user", USERSCHEMA);
module.exports = USER;
