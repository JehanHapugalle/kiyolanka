const router = require("express").Router();
let Product = require("../models/Product");

router.route("/add").post((req,res)=>{
    const pid = req.body.pid;
    const pname = req.body.pname;
    const date = req.body.date;
    const weight = req.body.weight;
    const nop = req.body.nop;

    const newProduct = new Product({
        pid,
        pname,
        date,
        weight,
        nop
    })

    newProduct.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Product.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {pname, weight, date, nop} = req.body;
    console.log(pname, weight, date, nop, userId)
    try{
        await Product.findById(userId, (error, updateProduct) => {
            updateProduct.pname = (pname);
            updateProduct.weight = (weight);
            updateProduct.date = (date);
            updateProduct.nop = (nop);
            updateProduct.save();
        });
    } catch (err) {
        console.log(err);
    }
    res.send("Product Updated");
})

// router.route("/update/:id").put(async(req,res)=>{
//     let userId = req.params.id;
//     const {pid, pname, date, weight, nop} = req.body;

//     const updateProduct = {
//         pid,
//         pname,
//         date,
//         weight,
//         nop
//     }

//     const update = await Product.findByIdAndUpdate(userId, updateProduct).then(()=>{
//         res.status(200).send({status: "Product updated"})
//     }).catch((err)=>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with updating data", error: err.message});
//     })
// })

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;
    await Product.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting user", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await Product.findById(userId).then(()=>{
        res.status(200).send({status: "User fetched", Product})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting user"});
    })
})

module.exports = router;