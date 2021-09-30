const router = require("express").Router();
let Transport = require("../models/Transport");

router.route("/add").post((req,res)=>{
    const did = req.body.did;
    const dname = req.body.dname;
    const date= req.body.date;
    const licence_no = req.body.licence_no;
    const vehicle_no = req.body.vehicle_no;
    const month = req.body.month;
    const time = req.body.time;

    const newTransport = new Transport({
        did,
        dname,
        date,
        licence_no,
        vehicle_no,
        month,
        time
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

    const {did, dname, licence_no, vehicle_no} = req.body;

    console.log(did, dname, licence_no, vehicle_no,  userId)

    try{

        await Transport.findById(userId, (error, updateTransport) => {

            updateTransport.did = (did);

            updateTransport.dname = (dname);

            updateTransport.licence_no = (licence_no);

            updateTransport.vehicle_no = (vehicle_no);

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

