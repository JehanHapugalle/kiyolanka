const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

    week : {
        type : String,
        required : true
    },
    eid : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    monday : {
        type : Boolean,
        required : true
    },
    tuesday : {
        type : Boolean,
        required : true
    },
    wednesday : {
        type : Boolean,
        required : true
    },
	thursday : {
        type : Boolean,
        required : true
    },
    friday : {
        type : Boolean,
        required : true
    },
    saturday : {
        type : Boolean,
        required : true
    },
    sunday : {
        type : Boolean,
        required : true
    },
    total : {
        type : Number,
        required : true
    }
})

const Attendance = mongoose.model("attendance", attendanceSchema);

module.exports = Attendance;