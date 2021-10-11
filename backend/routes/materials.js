const router = require("express").Router();
let Material = require("../models/Material");


router.route("/add").post((req,res)=>{
    const mid = req.body.mid;
    const type = req.body.type;
    const uprice = req.body.uprice;
    const date_received = req.body.date_received;
    const receivedamount = req.body.receivedamount;
   


    const newMaterial = new Material({
        mid,
        type,
        uprice,
        date_received,
        receivedamount
       
    })

    newMaterial.save().then(()=>{
        res.json("Material Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Material.find().then((materials)=>{
        res.json(materials)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {mid, type, uprice, date_received, receivedamount } = req.body;

    const updateMaterial = {
        mid,
        type,
        uprice,
        date_received,
        receivedamount
        
        
    }

    const update = await Material.findByIdAndUpdate(userId, updateMaterial).then(()=>{
        res.status(200).send({status: "Materials updated"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await Material.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Material deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting Material", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await Material.findById(userId).then(()=>{
        res.status(200).send({status: "material fetched", Material})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting material"});
    })
})

module.exports = router;

