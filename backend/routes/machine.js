const router = require("express").Router();
let Machine = require("../models/Machine");

router.route("/add").post((req,res)=>{
    const Mnum = req.body.Mnum;
    const Mname = req.body.Mname;
    const employee = req.body.employee;
    const status = req.body.status;
    const Mdate = req.body.Mdate;
    const Mhrs = req.body.Mhrs;
   

    const newMachine = new Machine({
        Mnum,
        Mname,
        employee,
        status,
        Mdate,
        Mhrs
    })

    newMachine.save().then(()=>{
        res.json("Machine Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Machine.find().then((machines)=>{
        res.json(machines)
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {employee, status,Mhrs} = req.body;
    console.log(employee, status,Mhrs,userId)
    try{
        await Machine.findById(userId, (error, updateMachine) => {
            updateMachine.employee = (employee);
            updateMachine.status = (status);
            updateMachine.Mhrs = (Mhrs);
            updateMachine.save();
        });
    } catch (err) {
        console.log(err);
    }
    res.send("Machine Details Updated");
})


router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await Machine.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting user", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await Machine.findById(userId).then(()=>{
        res.status(200).send({status: "User fetched", Machine})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting user"});
    })
})

module.exports = router;