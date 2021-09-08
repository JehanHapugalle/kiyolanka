const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({

    eid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    years_of_employment: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const Salary = mongoose.model("salary", salarySchema);

module.exports = Salary;