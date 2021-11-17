const express = require("express");
const mongoose = require("mongoose");
const app = express();

const ProductModel = require("./models/Product");

app.use(express.json());

mongoose.connect("mongodb://suAlex:Rn$NJFS4NyFP@localhost:27017/pizzeria?authSource=admin",
{useNewUrlParser:true}
);


app.get("/",  async (req, res) => {
    try {
        const product = new ProductModel({ productName: "Apple", productQuantity: 3 });
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
