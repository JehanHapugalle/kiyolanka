const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const supplierSchema = new Schema({



    sid : { 
        type : String,
        required : true
    },

    name : {
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
    supply_amount : {
        type : Number,
        required : true
    },
	unit_price : {
        type : Number,
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