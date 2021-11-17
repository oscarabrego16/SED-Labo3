const express = require("express");
const mongoose = require("mongoose");
const app = express();

const ProductModel = require('./models/Product')

app.use(express.json());

mongoose.connect('mongodb://suOscar:p9TX%5AK!FI!@host:27017/pizzeria?admin',
{useNewUrlParser:true,
useUnifiedTopology:true,}
);

app.get("/", async (req, res) => {
    const product = new ProductModel({ productName: "Apple", productQuantity: 3 });
    try {
        await product.save();
        res.send("inserted data");

    } catch (err) {
        console.log(err);
    }

})

app.listen(3000, () => {
    console.log("Running on port 3000");
}
);