const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddCalSchema = new Schema({

    s_qty : {
        type : Number,
        required : true
    },
    s_productname : {
        type : String,
        required : true
    },
    s_eachprice : {
        type : Number,
        required : true
    
    },
    sl_date :{
        type : String,
        required : true
    }
    
})

const AddCal = mongoose.model("CalculationSale", AddCalSchema);

module.exports = AddCal;