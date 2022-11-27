const Order = require("../models/Order"); 
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

// create 
router.post("/", verifyToken, async (req, res) => { // any user can create order
    const newOrder = new Product(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err);
    }
})

//  update 
router.put("/:id", verifyTokenAndAdmin, async (req, res) => { 
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete order

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
});

// get orders

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {  
    try {
        const orders = await Order.find({ userId: req.params.id });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err)
    }
});

// get all 

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get monthly income 

router.get("/income", verifyTokenAndAdmin, async (req,res) => {  // we only want to pull last month data 
    const date = new Date(); 
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1)); 
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
})


module.exports = router; 