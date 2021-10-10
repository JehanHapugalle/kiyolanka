const router = require("express").Router();
let Expense = require("../models/Expense");

router.route("/add").post((req,res)=>{
    const desc = req.body.desc;
    const Eprice = req.body.Eprice;
    const Edate = req.body.Edate;
    
   

    const newExpense = new Expense({
        desc,
        Eprice,
        Edate
    })

    newExpense.save().then(()=>{
        res.json("Expense Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Expense.find().then((expenses)=>{
        res.json(expenses)
    }).catch((err)=>{
        console.log(err);
    })
})


// router.route("/update/:id").put(async(req,res)=>{
//     let userId = req.params.id;
//     const {employee, status,Mhrs} = req.body;
//     console.log(employee, status,Mhrs,userId)
//     try{
//         await Machine.findById(userId, (error, updateMachine) => {
//             updateMachine.employee = (employee);
//             updateMachine.status = (status);
//             updateMachine.Mhrs = (Mhrs);
//             updateMachine.save();
//         });
//     } catch (err) {
//         console.log(err);
//     }
//     res.send("Machine Details Updated");
// })


router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await Expense.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Expense deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting expense", error: err.message});
    })
})

// router.route("/get/:id").get(async(req, res)=>{
//     let userId = req.params.id;
//     const user = await Machine.findById(userId).then(()=>{
//         res.status(200).send({status: "User fetched", Machine})
//     }).catch((err)=>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with getting user"});
//     })
// })

module.exports = router;