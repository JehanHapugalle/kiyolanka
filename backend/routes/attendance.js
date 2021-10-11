const router = require("express").Router();
let Attendance = require("../models/Attendance");

router.route("/add").post((req,res)=>{

    const month = req.body.month;

    const week = req.body.week;
    const eid = req.body.eid;
    const name = req.body.name;
    const monday = req.body.monday;
    const tuesday = req.body.tuesday;
    const wednesday = req.body.wednesday;
    const thursday = req.body.thursday;
    const friday = req.body.friday;
    const saturday = req.body.saturday;
    const sunday = req.body.sunday;
    const total = req.body.total;

    const newAttendance = new Attendance({

        month,

        week,
        eid,
        name,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        total
    })

    newAttendance.save().then(()=>{
        res.json("Attendance Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Attendance.find().then((attendance)=>{
        res.json(attendance)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;

    const {name, job_title, contact, address} = req.body;
    console.log(name, job_title, contact, address, userId)
    try{
        await Employee.findById(userId, (error, updateEmployee) => {
            updateEmployee.name = (name);
            updateEmployee.job_title = (job_title);
            updateEmployee.contact = (contact);
            updateEmployee.address = (address);
            updateEmployee.save();

    const {monday, tuesday, wednesday, thursday, friday, saturday, sunday, total} = req.body;
    console.log(monday, tuesday, wednesday, thursday, friday, saturday, sunday, total, userId)
    try{
        await Attendance.findById(userId, (error, updateAttendance) => {
            updateAttendance.monday = (monday);
            updateAttendance.tuesday = (tuesday);
            updateAttendance.wednesday = (wednesday);
            updateAttendance.thursday = (thursday);
            updateAttendance.friday = (friday);
            updateAttendance.saturday = (saturday);
            updateAttendance.sunday = (sunday);
            updateAttendance.total = (total);
            updateAttendance.save();

        });
    } catch (err) {
        console.log(err);
    }

    res.send("Employee Updated");

    res.send("Attendance Updated");

})

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await Attendance.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Attendance deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting attendance", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await Attendance.findById(userId).then(()=>{
        res.status(200).send({status: "User fetched", Attendance})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting user"});
    })
})

module.exports = router;

