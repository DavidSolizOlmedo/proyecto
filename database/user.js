const mongoose = require("./connect");
var USERSCHEMA = {
  name :  String,
  lastname : String,
  fullname : String,
  email : String,
  register : Date,
  password : String,
  cel : String,
  ubication: Number
}
const USER = mongoose.model("user", USERSCHEMA);
module.exports = {model: USER, schema: USERSCHEMA};
