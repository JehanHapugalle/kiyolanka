const router = require("express").Router();
let Supplier = require("../models/Supplier");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const nic_no = req.body.nic_no;
    const address = req.body.address;
    const contact_no = req.body.contact_no;
    const email = req.body.email;
    const date_of_birth = req.body.date_of_birth;
    const supply_scale = req.body.supply_scale;
    const payment_type = req.body.payment_type;
    const bank = req.body.bank;
    const account_no = req.body.account_no;
     

    const newSupplier = new Supplier({
        name,
        nic_no,
        address,
        contact_no,
        email,
        date_of_birth,
        supply_scale,
        payment_type,
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
    const {name, nic_no, address, contact_no, email, date_of_birth, supply_scale, payment_type, bank, account_no} = req.body;

    const updateSupplier = {
        name,
        nic_no,
        address,
        contact_no,
        email,
        date_of_birth,
        supply_scale,
        payment_type,
        bank,
        account_no
    }

    const update = await Supplier.findByIdAndUpdate(userId, updateSupplier).then(()=>{
        res.status(200).send({status: "Supplier updated"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
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

