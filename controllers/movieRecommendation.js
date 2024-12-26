
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
import {GoogleGenerativeAI} from "@google/generative-ai"
 
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const movieRecommend = async (req,res) => {
    const moviesmodel = mongoose.model("movies")
    const movies = await moviesmodel.find({})

    const {prompt} = req.body
    const ap = `${prompt} based of off ${movies}`
    const result = await model.generateContent(ap);
    console.log(result.response.text());
    res.json({message : result.response.text()})

}