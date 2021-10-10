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
    vehicle_payment : {
        type : Number,
        required : true
    },
    driver_payment : {
        type : Number,
        required : true
    }
})

const Transport = mongoose.model("transport", transportSchema);

module.exports = Transport;