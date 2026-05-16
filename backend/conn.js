require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.mongourl).then((res)=>{
    console.log("db connected")
}).catch(err=>{
    console.log("error: ",err)
})
