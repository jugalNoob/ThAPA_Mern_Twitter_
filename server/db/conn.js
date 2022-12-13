const mongoose=require("mongoose")
const DB= process.env.DATA
mongoose.connect(DB , {
}).then(()=>{

console.log("connect")

}).catch(()=>{
    console.log("not connect")
})