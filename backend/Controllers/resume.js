const resumeModel = require('../Models/resume');
const multer = require("multer");
const pdfParse = require('pdf-parse');
const path = require("path");
const {CohereClient} = require("cohere-ai");

const cohere = new CohereClient({
    token:"KqPgWEoUVkwA3xB5lZYiPRePs9uVr95v8B8GkCEs" //cohere api key
})




exports.addResume = async(req,res)=>{
    try{
        const {job_des,user} = req.body;
        // console.log(req.file)
        // console.log(job_des,user);
        const pdfBuffer = req.file.buffer || null;
        const pdfPath = req.file.path;
        const fs = require("fs");
        const dataBuffer = fs.readFileSync(pdfPath);
        const pdfData = await pdfParse(dataBuffer);

        const prompt = `
        You are a resume screening assistant. 
        Compare the following resume text with the provided job descripted and give a match score (0-100) and 
        Resume:
        ${pdfData.text}
        Job Description:
        ${job_des}

        Return the score and brief explanation in this format
        Score: xx
        Reason: ... <provide a plaintext without special symbols for the reason>

        `
        ;
        const response = await cohere.chat({
            model:"c4ai-aya-expanse-32b",
            message :prompt,
            max_tokens: 100,
            temperature: 0.7,
        });

        let result = response.text;
        console.log(result);

        const match = result.match(/Score:\s*(\d+)/)
        const score = match ? parseInt(match[1],10) : null;

        const reasonMatch = result.match(/Reason:\s*([\s\S]*)/);
        const reason = reasonMatch ? reasonMatch[1].trim() : null;
        const cleanReason = reason?.replace(/\*/g,"")?.replace(/#+/g,"")?.trim();
        const newResume = new resumeModel({
            user,
            resume_Name: req.file.originalname,
            job_des,
            score,
            feedback: cleanReason
        });

        await newResume.save();
        fs.unlinkSync(pdfPath);

        res.status(200).json({message:"your analysis is ready", data: newResume});


    }catch(err){
        console.log(err);
        res.status(500).json({error:"server error", message:err.message});
    }
}

exports.getAllResumesForUser = async(req,res) => {
    try{
        const {user} = req.params;

        let resumes = await resumeModel.find({user:user}).sort({ createdAt: -1});
        return res.status(200).json({message:"Your History", resumes: resumes});

    }catch(err){
        console.log(err);
        return res.status(500).json({error:"server error", message:err.message});
    }
}

exports.getResumeForAdmin = async (req,res) =>{
    try{
        let resumes = await resumeModel.find({}).sort({createdAt:-1}).populate("user");
        return res.status(200).json({message: "fetched all history", resumes:resumes})
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"server error", message: err.message});
    }
}