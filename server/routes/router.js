const express = require("express");
const router = new express.Router();

const Register=require("../models/student")
const authenticate = require("../middleware/authenticate");
const bcrypt = require('bcryptjs');


router.get("/" , (req,res)=>{

    res.send("jugal sharma")
})

//SignIn data line row class


router.post("/Signup" , async(req,res)=>{
    try{
        const userdata=new Register({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        const data=await userdata.save();
        console.log(data)
        res.status(200).json({error:"succsessfull  full"})
    }catch(e){
        console.log(e)
        res.status(400).json({error:"succsessfull not full"})
    }
})

//login start row class line
router.post("/Login" , async(req,res)=>{
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try{
        const userValid = await Register.findOne({email:email});
        if(userValid){
            const isMatch = await bcrypt.compare(password,userValid.password);
            if(!isMatch){
                res.status(422).json({ error: "invalid details"})
            }else{
                // token generate
                const token = await userValid.generateAuthtoken();
                console.log(token)
                // cookiegenerate
                res.cookie("usercookie",token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
                });
                const result = {
                    userValid,
                    token
                }
               res.status(201).json({status:201,result})
            }
        }
    }catch(err){

        console.log(err)
        res.status(401).json({error:"succsessfull not full"})
    }

})


//authentication

    router.get("/Cont",authenticate,(req,res)=>{
        console.log("hello")
        res.send(req.rootUser)
});

///Out Line Row class


router.get("/logout",(req,res)=>{
    console.log("hello hellow eolred")
    res.clearCookie("usercookie")
    res.status(200).send("UsreLogout")
});
 


///last row class line

module.exports = router;