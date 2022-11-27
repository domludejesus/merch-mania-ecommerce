const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router(); 

// update 
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => { // we now want to verify if this is an admin or just a user 
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString() 
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body,
            }, 
            { new: true }
        ); 
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err); 
    }
}); 

// delete 

router.delete("/:id", verifyTokenAndAuthorization, async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted...")
    } catch (err){
        res.status(500).json(err)
    }
}); 

// get user

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {  // since only admins can get users we will add verifytokenadmin 
    try {
       const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;              // this will prevent get user from seeing all details 

        res.status(200).json({others}); 
    } catch (err) {
        res.status(500).json(err)
    }
}); 

// get all user

router.get("/", verifyTokenAndAdmin, async (req, res) => {  // since only admins can get users we will add verifytokenadmin 
    const query = req.query.new; // adding login to query requests coming from all users 
    try {
        const users = query ? await User.find().sort({ _id: -1}).limit(5) :  User.find() // if query get 5 users and if not get all 
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err)
    }
}); 

// get user stats 

router.get("/stats", verifyTokenAndAdmin, async (req,res) => { // only admins have this feature 
    const date = new Date(); 
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1)); 

    try {
        const data = await User.aggregate([ // we will now use the mongoDB function for aggregate and this will need some logic 
            { $match: { createdAt: { $gte: lastYear} } },
            {
                $project:{
                    month: { $month: "$createdAt"} // this will grab the month these users were created on 
                }
            }, 
            {
                $group: {
                    _id: "$month", 
                    total: { $sum: 1}, // this will grab total users 
                }

            }
        ]); 
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err); 
    }
})


module.exports = router; 