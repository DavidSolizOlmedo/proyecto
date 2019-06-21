const mongoose = require("./connect");
var PRODUCTSCHEMA = {
  name :  String,
  price : Number,
  cant : Number,
  registerdate : Date,
  details : String
}
const PRODUCT = mongoose.model("product", PRODUCTSCHEMA);
module.exports = PRODUCT;
