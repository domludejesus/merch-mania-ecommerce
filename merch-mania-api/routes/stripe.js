const router = require("express").Router(); 
//const stripe = require("stripe")(process.env.STRIPE_KEY); 
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY)

router.post("/payment", (req,res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "USD",
    }, (stripeErr, stripeRes)=> {
        if(stripeErr) {
            res.status(500).json(stripeErr) 
        }else {
            res.status(200).json(stripeRes) // if everything good this will include all of data 
        }
    }); 
})



module.exports = router; 