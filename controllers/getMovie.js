import mongoose from "mongoose"


export const getAllMovie = async (req,res) => {

    const moviesModel = await mongoose.model("movies")

    // getting all data
    try {
        const allMovie = await moviesModel.find({})
        res.status(200).json({
            status: 200,
            data: allMovie
        })
    } catch (error) {
        res.status(404)
        throw error
    }
}

export const getMovie = async (req,res) => {
    // getting the model
    const moviesModel = await mongoose.model("movies")
    
    try {
        const result = await moviesModel.find({
            _id : req.params.movie_id
        })
        res.status(200).json({
            status: 200,
            message: result
        })
    } catch (error) {
        console.log(error)
        throw error
    }


}
