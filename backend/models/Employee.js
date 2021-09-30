const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    eid : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    job_title : {
        type : String,
        required : true
    },
    date_joined : {
        type : Date,
        required : true
    },
    dob : {
        type : Date,
        required : true
    },
	contact : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;