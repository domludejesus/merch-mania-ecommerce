const jwt = require("jsonwebtoken"); 

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token; 
    if (authHeader) {
        const token = authHeader.split(" ")[1]; // this will ensure header data from api will be working with added space 
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token is no longer valid!"); 
            req.user = user; 
            next(); //once verified then move next to user.js 
        }); 
    } else {
        return res.status(401).json("You are not authenticated")
    }
}; 

const verifyTokenAndAuthorization = (req, res, next)=> { // login 
    verifyToken(req,res,()=> {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }else {
            res.status(403).json("You do not have permission to do this")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => { // Admin 
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You do not have permission to do this")
        }
    })
}

module.exports = { 
    verifyToken,
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin
}; 