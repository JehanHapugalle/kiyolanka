const router = require("express").Router();
let Supplier = require("../models/Supplier");

router.route("/add").post((req,res)=>{
    const sid = req.body.sid;
    const name = req.body.name;

    const contact_no = req.body.contact_no;
    const email = req.body.email;
    const supply_amount = req.body.supply_amount;
    const unit_price = req.body.unit_price;
    const bank = req.body.bank;
    const account_no = req.body.account_no;
     

    const newSupplier = new Supplier({
        sid,
        name,
        
        contact_no,
        email,
        supply_amount,
        unit_price,
        bank,
        account_no
    })

    newSupplier.save().then(()=>{
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Supplier.find().then((suppliers)=>{
        res.json(suppliers)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const {contact_no, email, supply_amount, unit_price, bank, account_no } = req.body;
    console.log(contact_no, email, supply_amount, unit_price, bank, account_no, userId)

    try{
        await Supplier.findById(userId, (error, updateSupplier) => {

            updateSupplier.contact_no = (contact_no);
            updateSupplier.email = (email);
            updateSupplier.supply_amount = (supply_amount);
            updateSupplier.unit_price = (unit_price);
            updateSupplier.bank = (bank);
            updateSupplier.account_no = (account_no);
            updateSupplier.save();
        });
    } catch (err) {
        console.log(err);
    }

    res.send("Supplier Updated");
})



router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await Supplier.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Supplier deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting supplier", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await Supplier.findById(userId).then(()=>{
        res.status(200).send({status: "Supplier fetched", Supplier})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting supplier"});
    })
})

module.exports = router;

