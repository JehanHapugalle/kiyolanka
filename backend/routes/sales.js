const router = require("express").Router();
let Sale = require("../models/Sale");

router.route("/add").post((req,res)=>{
    const scus_name = req.body.scus_name;
    const scon_number = req.body.scon_number;
    const ssale_id = req.body.ssale_id;
    const s_email = req.body.s_email;
    const s_amount = req.body.s_amount;
    const s_date = req.body.s_date;

    const newSale = new Sale({
        scus_name,
        scon_number,
        ssale_id,
        s_email,
        s_amount,
        s_date
    })

    newSale.save().then(()=>{
        res.json("Sale Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Sale.find().then((sales)=>{
        res.json(sales)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {scus_name, scon_number, s_email, s_amount} = req.body;
    console.log(scus_name, scon_number, s_email, s_amount, userId)
    try{
        await Sale.findById(userId, (error, updateSale) => {
            updateSale.scus_name = (scus_name);
            updateSale.scon_number = (scon_number);
            updateSale.s_email = (s_email);
            updateSale.s_amount = (s_amount);
            updateSale.save();
        });
    } catch (err) {
        console.log(err);
    }
    res.send("Sale Updated");
})

    /*const updateSale = {
        scus_name,
        scon_number,
        ssale_id,
        s_email,
        s_amount
    }

    const update = await Sale.findByIdAndUpdate(userId, updateSale).then(()=>{
        res.status(200).send({status: "Sale updated"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})*/

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await Sale.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Sale deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting sale", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await Sale.findById(userId).then(()=>{
        res.status(200).send({status: "User fetched", Sale})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting sale"});
    })
})

module.exports = router;

