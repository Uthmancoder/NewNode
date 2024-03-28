const mongoose = require("mongoose")

const shoppingSchema = new mongoose.Schema({
    productName : {type : String, required : [true, "Product name is required"]},
    productPrice : {type : Number, required : [true, "Product price is required"]},
    productCategory : {type : String, required : [true, "Product category is required"]},
    productDescription : {type : String, required : [true, "Product description is required"]},
    productImage : {type : String, required : [true, "Product image is required"]},
})

const shoppingModel = mongoose.model("shoppingModel", shoppingSchema)

module.exports = shoppingModel