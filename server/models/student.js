const mongoose=require("mongoose")
const bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken")

const keysecret=process.env.DATABASE;


const students=new mongoose.Schema({

    name:{
        type:String
    },

    email:{
        type:String
    },

    password:{
        type:String
    },

    tokens:[
        {
            token:{
                type:String
            },
        }
    ]
})

////////////////////




//we genterateAutoken and set the
students.methods.generateAuthtoken = async function () {
    try {
        let token23 = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({ token: token23 });
        await this.save();
        return token23;
    } catch (error) {
        res.status(422).json(error)
    }
}
// your token row class
students.pre("save" , async  function(next){

    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password , 12)
    }

    next()
})






const Register=new mongoose.model("Usersdata" , students) //models collection name of database

module.exports=Register;