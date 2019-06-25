const mongoose = require("./connect");
var PRODUCTSCHEMA = {
  title :  String,
  price : Number,
  cant : Number,
  registerdate : Date,
  details : String
}
const PRODUCT = mongoose.model("product", PRODUCTSCHEMA);
module.exports = {model: PRODUCT, schema: PRODUCTSCHEMA};
