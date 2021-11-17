const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const app = express();


const ProductModel = require("./models/Product");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://suAlex:Rn$NJFS4NyFP@host:27017/pizzeria?authSource=admin",
{useNewUrlParser:true}
);


app.post("/insert",  async (req, res) => {
    const productName= req.body.productName;
    const productQuantity= req.body.productQuantity;
    try {
        const product = new ProductModel({ productName: productName, productQuantity: productQuantity});
        await product.save();
        return res.json({status:"success", data: product,message:"product added"});

    } catch (error) {
        console.error(error);
        return res.json({status:"error", data: NULL,message:error});
    }

})

app.listen(3000, () => {
    console.log("Running on port 3000");
}
);