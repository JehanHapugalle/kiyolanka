const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportSchema = new Schema({

    did : {
        type : String,
        required : true
    },
    dname : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    licence_no : {
        type : String,
        required : true
    },
    vehicle_no : {
        type : String,
        required : true
    },
    month : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    }
})

const Transport = mongoose.model("transport", transportSchema);

module.exports = Transport;