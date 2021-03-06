const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    pid : {
        type : String,
        required : true
    },
    pname : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    weight : {
        type : Number,
        required : true
    },
    nop : {
        type : Number,
        required : true
    }
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;