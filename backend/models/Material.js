const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialSchema = new Schema({

    mid:{
        type: String,
        required:true
     },
   
    type:{
      type: String,
      required:true
   },
    uprice : {
        type : String,
        required : true
    },
    date_received : {
        type : String,
        required : true
    },
    receivedamount : {
        type : String,
        required : true
    }
})

const Material = mongoose.model("material", materialSchema);

module.exports = Material;