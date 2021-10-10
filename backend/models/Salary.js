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
    SalaryEmpACCno: {
        type: Number,
        required: true
    },
    
    SalaryEmpMonth: {
        type: String,
        required: true
    },
    BasicSalary: {
        type: Number,
        required: true
    },
    SalaryBonus: {
        type: Number,
        required: true
    }

})

const Salary = mongoose.model("salary", salarySchema);

module.exports = Salary;