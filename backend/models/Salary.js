const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({

    SalaryEmpId: {
        type: String,
        required: true
    },
    SalaryEmpName: {
        type: String,
        required: true
    },
    SalaryEmpGender: {
        type: String,
        required: true
    },
    
    SalaryEmpStatus: {
        type: String,
        required: true
    },
    BasicSalary: {
        type: String,
        required: true
    },
    SalaryBonus: {
        type: String,
        required: true
    }

})

const Salary = mongoose.model("salary", salarySchema);

module.exports = Salary;