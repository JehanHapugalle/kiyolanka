const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({

    desc : {
        type : String,
        required : true
    },
    Eprice : {
        type : Number,
        required : true
    },
    Edate : {
        type : String,
        required : true
    }
})

const Expense = mongoose.model("expense", ExpenseSchema);

module.exports = Expense;