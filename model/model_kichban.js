var mongoose = require("../config/db_connection");
const { model } = require("../config/db_connection");
var Schema = mongoose.Schema; //Gom cac title vao
var buffSchema = new Schema({
  // table gom cac thuoc tinh sau:
  title: String,
  content: String,
  author: String,
  like: {
    type: Number,
    default: 0
  },
  tag: Array
});
//Model: tuong tac khi thuc hien lenh
var buffModel = mongoose.model("kichban", buffSchema); //Ten cua table = AccountModel
module.exports = buffModel;
