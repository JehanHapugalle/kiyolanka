const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const machineSchema = new Schema({

    Mnum : {
        type : String,
        required : true
    },
    Mname : {
        type : String,
        required : true
    },
    employee : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    Mdate : {
        type : String,
        required : true
    },
    Mhrs : {
        type : String,
        required : true
    }
})

const Machine = mongoose.model("machine", machineSchema);

module.exports = Machine;