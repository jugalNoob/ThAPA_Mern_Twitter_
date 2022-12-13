const jwt=require("jsonwebtoken")
const Register=require("../models/student")
const keysecret=process.env.DATABASE;
const authenticate = async(req,res,next)=>{

    try {
        const token = req.cookies.usercookie;
        const verifytoken = jwt.verify(token,keysecret);
        const rootUser = await Register.findOne({_id:verifytoken._id , "tokens.token":token});
        if(!rootUser) {throw new Error("user not found")}

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();

    } catch (error) {
        res.status(401).send("No Token Provider")
        console.log(error)
    }
}


module.exports = authenticate
