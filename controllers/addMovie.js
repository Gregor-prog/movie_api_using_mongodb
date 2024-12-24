import mongoose from "mongoose"

const addMovie = async (req,res) => {
    const {movie_name, info, rating} = req.body
    const moviesModel = mongoose.model("movies")
    // validation...
    try {
        if(!movie_name){
           throw "movie_name not found"
        }
        else if(!info){
            throw "Info not found"
        }
        else if(!rating){
           throw "Rating not found"
        }
        else if(rating < 0 || rating > 10){
            throw "rating must be between 0-10"
        }
    } catch (error) {
            res.status(404).json({error})
            return
    }
    // adding info to database
    try{
        moviesModel.create({
            movie_name: movie_name,
            info:info,
            rating: rating
        })
    }
    catch(e){
        res.status(500).json({message: "An error occured"})
        console.log(e)
        throw new Error("An error occured");
    }


    res.status(200).json({message: "successfully added movie"})
}

export default addMovie