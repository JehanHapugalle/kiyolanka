const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saleSchema = new Schema({

    scus_name : {
        type : String,
        required : true
    },
    scon_number : {
        type : String,
        required : true
    },
    ssale_id : {
        type : String,
        required : true
    },
    s_email : {
        type : String,
        required : true
    },
    s_amount : {
        type : String,
        required : true
    }
	
})

const Sale = mongoose.model("sale", saleSchema);

module.exports = Sale;