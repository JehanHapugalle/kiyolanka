const router = require("express").Router();
let Transport = require("../models/Transport");

router.route("/add").post((req,res)=>{
    const did = req.body.did;
    const dname = req.body.dname;
    const date= req.body.date;
    const licence_no = req.body.licence_no;
    const vehicle_no = req.body.vehicle_no;
    const vehicle_payment = req.body.vehicle_payment;
    const driver_payment = req.body.driver_payment;

    const newTransport = new Transport({
        did,
        dname,
        date,
        licence_no,
        vehicle_no,
        vehicle_payment,
        driver_payment
    })

    newTransport.save().then(()=>{
        res.json("Transport Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Transport.find().then((transports)=>{
        res.json(transports)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;

    const { dname, licence_no, vehicle_no,vehicle_payment,driver_payment} = req.body;

    console.log( dname, licence_no, vehicle_no,vehicle_payment,driver_payment, userId)

    try{

        await Transport.findById(userId, (error, updateTransport) => {

            updateTransport.dname = (dname);

            updateTransport.licence_no = (licence_no);

            updateTransport.vehicle_no = (vehicle_no);

            updateTransport.vehicle_payment = (vehicle_payment);

            updateTransport.driver_payment = (driver_payment);


            updateTransport.save();

        });

    } catch (err) {

        console.log(err);

    }

    res.send("Transport Updated");

})

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await Transport.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "user deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting user", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await Transport.findById(userId).then(()=>{
        res.status(200).send({status: "User fetched", Transport})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting user"});
    })
})

module.exports = router;

