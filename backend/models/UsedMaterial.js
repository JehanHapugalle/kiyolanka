const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usedmaterialSchema = new Schema({

    usedamount:{
        type: String,
        required:true
     },
   
    usedtype:{
      type: String,
      required:true
   },

   usedmonth:{
       type: String,
       required:true
   },

   unit:{
    type: String,
    required:true
}


})

const UsedMaterial = mongoose.model("usedmaterial", usedmaterialSchema);

module.exports = UsedMaterial;