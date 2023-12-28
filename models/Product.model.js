const mongoose = require("mongoose")
const Product =mongoose.model("Product", new mongoose.Schema({
    image:String,
    title:String,
    desc:String
}))
module.exports = {Product}