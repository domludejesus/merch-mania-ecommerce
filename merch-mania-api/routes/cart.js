const Cart = require("../models/Cart"); 
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

// create 
router.post("/", verifyToken, async (req, res) => { // any user can create cart 
    const newCart = new Product(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err);
    }
})

//  update 
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => { // user authorization needed for cart 
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart)
    } catch (err) {
        res.status(500).json(err);
    }
});

 //delete 

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
});

 // get user cart 

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {  // this will be the user id not the cart id 
    try {
        const cart = await Cart.find({ userId: req.params.id }); 
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err)
    }
});

 // get all 

 router.get("/", verifyTokenAndAdmin, async (req,res) => {
    try {
        const carts = await Cart.find(); 
        res.status(200).json(carts); 
    } catch (err) {
        res.status(500).json(err); 
    }
 }); 


module.exports = router; 