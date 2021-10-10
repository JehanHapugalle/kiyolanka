const router = require("express").Router();
let AddCal = require("../models/Calculationsale");

router.route("/add").post((req,res)=>{
    const s_qty = req.body.s_qty;
    const s_productname = req.body.s_productname;
    const s_eachprice = req.body.s_eachprice;
    const sl_date = req.body.sl_date;

    const newAddCal = new AddCal({
        s_qty,
        s_productname,
        s_eachprice,
        sl_date
    })

    newAddCal.save().then(()=>{
        res.json("Price Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    AddCal.find().then((Price)=>{
        res.json(Price)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await AddCal.findById(userId).then(()=>{
        res.status(200).send({status: "User fetched", AddCal})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting sale"});
    })
})
router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await AddCal.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Sale deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting sale", error: err.message});
    })
})



module.exports = router;