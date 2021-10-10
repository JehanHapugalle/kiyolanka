const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

    month : {
        type : String,
    },
    week : {
        type : String,
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
    },
    tuesday : {
        type : Boolean,
    },
    wednesday : {
        type : Boolean
    },
	thursday : {
        type : Boolean,
    },
    friday : {
        type : Boolean,
    },
    saturday : {
        type : Boolean,
    },
    sunday : {
        type : Boolean,
    },
    total : {
        type : Number,
    }
})

const Attendance = mongoose.model("attendance", attendanceSchema);

module.exports = Attendance;