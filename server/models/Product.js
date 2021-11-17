const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    productName:{
        required:true,
        type:String,
    },
    produuctQuantity:{
        type: Number,
        required=true,
    },
});

const Product = mongoose.model("ProductData",ProductSchema)
module.exports= Product;