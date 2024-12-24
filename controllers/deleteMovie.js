import mongoose from "mongoose"

export const deleteMovie = async (req,res) => {
    const moviesModel = mongoose.model("movies")
    const movie_id = req.params.movie_id

    try {
       const result =  moviesModel.find({_id: movie_id})
       if(!result.movie_name) throw "movie not found"
    } catch (error) {
        res.json({
            status:200,
            message : error
        })
    }



    try {
       await moviesModel.deleteOne({
            _id: movie_id
        })
    } catch (error) {
        res.status(404).json({
            status:404,
            message: error.message
        })
        throw error
    }

    res.json({
        status : 200,
        message: "movie deleted succesfully"
    })
}