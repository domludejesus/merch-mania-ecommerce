const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")

// Register 

// since when we create a new user saving to database may cause delay we will turn this into async program 
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username, 
        email: req.body.email, 
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),  
    }); 

    try {
        const savedUser = await newUser.save(); 
        res.status(201).json(savedUser); 
    }   catch (err) {
        res.status(500).json(err); 
     
    }
}); 

// login 
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username}); 
        !user && res.status(401).json("Wrong Credentials!")

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SEC
        ); 
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        OriginalPassword !== req.body.password && 
            res.status(401).json("Wrong Credentials"); 

        const { password, ...others } = user._doc; // since mongo db document database is how our storage works we need to install this correctly              

            res.status(200).json(others); 
    }   catch (err) {
        res.status(500).json(err); 
    }
})



module.exports = router; 