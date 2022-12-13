require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

require("./db/conn")
const router = require("./routes/router");
const cors = require("cors");


const cookiParser = require("cookie-parser")


const port=process.env.PORT 

app.use(express.json())
app.use(cookiParser());
app.use(cors());
app.use(router);





app.listen(port , ()=>{
    console.log(port + " this is port number ")
})