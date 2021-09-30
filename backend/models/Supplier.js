const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const supplierSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    nic_no : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    contact_no : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    date_of_birth : {
        type : String,
        required : true
    },
	supply_scale : {
        type : String,
        required : true
    },
    payment_type : {
        type : String,
        required : true
    },
    bank : {
        type : String,
        required : true
    },
    account_no : {
        type : Number,
        required : true
    }
})

const Supplier = mongoose.model("supplier", supplierSchema);

module.exports = Supplier;