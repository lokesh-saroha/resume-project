
const express = require('express');
const app = express();
const cors = require('cors');
const PORT =4000;

require('./conn');
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:"https://resume-project-pink.vercel.app/"
}))

// app.get('/',(req,res)=>{
//     res.send(
//         {message:"welcome hi to backend"}
//     )
// })

const userRoutes = require('./Routes/user');
const resumeRoutes = require('./Routes/resume');



app.use('/api/user',userRoutes);
app.use('/api/resume', resumeRoutes)
app.listen(PORT,()=>{
    console.log("backend is running on port", PORT)
})

