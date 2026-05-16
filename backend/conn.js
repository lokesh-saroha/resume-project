require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.mongourl).then((res)=>{
    console.log("db connected")
}).catch(err=>{
    console.log("error: ",err)
})


//iC1y0RXzldlbap5T
//lokeshsrh0405_db_user iC1y0RXzldlbap5T

// mongodb+srv://lokeshsrh0405_db_user:mOjj7Sp2UPnyVrlH@cluster0.vquwujd.mongodb.net/?appName=Cluster0