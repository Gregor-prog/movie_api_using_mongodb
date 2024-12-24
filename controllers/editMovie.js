import mongoose from "mongoose"

export const  updateData = async (req,res) => {
 const   {_id, movie_name, info, rating} =  req.body;
    // importing model
    const moviesModel = mongoose.model("movies")

    try {
        // updating one data
           await moviesModel.updateOne({_id:_id},{info:info, movie_name:movie_name, rating:rating},{runValidators:true})
    } catch (error) {
        if(error) throw error
    }
    res.status(200).json({
        status:200,
        message: "you have successfully updated the movie"
    })
}