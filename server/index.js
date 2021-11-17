const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/pizzeria', { userNewUrlPaser: true, });

app.listen(3000,()=>{
    console.log("Running on port 3000");
}
);