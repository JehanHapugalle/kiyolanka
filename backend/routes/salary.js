 const router = require("express").Router();
 let Salary = require("../models/Salary");

 router.route("/add").post((req, res) => {
     const SalaryEmpId = req.body.SalaryEmpId;
     const SalaryEmpName = req.body.SalaryEmpName;
     const SalaryEmpACCno = req.body.SalaryEmpACCno;
     const  SalaryEmpStatus = req.body. SalaryEmpStatus;
     const  BasicSalary = req.body. BasicSalary;
     const  SalaryBonus = req.body. SalaryBonus;

     const newSalary = new Salary({
        SalaryEmpId,
        SalaryEmpName,
        SalaryEmpACCno,
         SalaryEmpStatus,
         BasicSalary,
         SalaryBonus

     })

     newSalary.save().then(() => {
         res.json("Salary Added")
     }).catch((err) => {
         console.log(err);
     })
 })

 router.route("/").get((req, res) => {
     Salary.find().then((salary) => {
         res.json(salary)
     }).catch((err) => {
         console.log(err);
     })
 })

 router.route("/update/:id").put(async(req, res) => {
     let userId = req.params.id;
     const { SalaryEmpId, SalaryEmpName , SalaryEmpACCno ,SalaryEmpStatus ,BasicSalary , SalaryBonus } = req.body;

     const updateSalary = {
         SalaryEmpId,
         SalaryEmpName,
         SalaryEmpACCno,
         SalaryEmpStatus,
         BasicSalary,
          SalaryBonus

     }

     const update = await Salary.findByIdAndUpdate(userId, updateSalary).then(() => {
         res.status(200).send({ status: "Salary updated" })
     }).catch((err) => {
         console.log(err.message);
         res.status(500).send({ status: "Error with updating data", error: err.message });
     })
 })

 router.route("/delete/:id").delete(async(req, res) => {
     let userId = req.params.id;
     await Salary.findByIdAndDelete(userId).then(() => {
         res.status(200).send({ status: "User deleted" })
     }).catch((err) => {
         console.log(err.message);
         res.status(500).send({ status: "Error with deleting user", error: err.message });
     })
 })

 router.route("/get/:id").get(async(req, res) => {
     let userId = req.params.id;
     const user = await Salary.findById(userId).then(() => {
         res.status(200).send({ status: "User fetched", Salary })
     }).catch((err) => {
         console.log(err.message);
         res.status(500).send({ status: "Error with getting user" });
     })
 })

 module.exports = router;