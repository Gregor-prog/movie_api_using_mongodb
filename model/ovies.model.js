import mongoose from "mongoose"

const moviesSchema = new mongoose.Schema({
    movie_name:{
        type: String,
    },
    info:{
        type:String
    },
    rating:{
        type:Number
    },
})

const moviesmodel = mongoose.model("movies", moviesSchema)

export default moviesmodel