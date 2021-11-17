const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    productName:{
        required:true,
        type:String,
    },
    productQuantity:{
        type: Number,
        required=true,
    },
});

const Product = mongoose.model("Product",ProductSchema)
module.exports= Product;