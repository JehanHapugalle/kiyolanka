const router = require("express").Router();
let UsedMaterial = require("../models/UsedMaterial");


router.route("/add").post((req,res)=>{
    const usedamount = req.body.usedamount;
    const usedtype = req.body.usedtype;
    const usedmonth = req.body.usedmonth;
    const unit = req.body.unit;
 
   


    const newUsedMaterial = new UsedMaterial({
        usedamount,
        usedmonth,
        usedtype,
        unit
       
    })

    newUsedMaterial.save().then(()=>{
        res.json("UsedMaterial Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    UsedMaterial.find().then((Usedmaterial)=>{
        res.json(Usedmaterial)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {usedamount,usedmonth,usedtype, unit } = req.body;

    const updateUsedMaterial = {
        usedamount,
        usedmonth,
        usedtype,
        unit
        
        
    }

    const update = await Material.findByIdAndUpdate(userId, updateUsedMaterial).then(()=>{
        res.status(200).send({status: "UsedMaterial updated"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await UsedMaterial.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "UsedMaterial deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting Material", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await UsedMaterial.findById(userId).then(()=>{
        res.status(200).send({status: "material fetched", UsedMaterial})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting material"});
    })
})

module.exports = router;
