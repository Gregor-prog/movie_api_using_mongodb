// importing variables...
import express from "express"
import addMovie from "./controllers/addMovie.js"
import  mongoose from "mongoose"
import dotenv from "dotenv"
import {getAllMovie, getMovie} from "./controllers/getMovie.js"
import { updateData } from "./controllers/editMovie.js"
import { deleteMovie } from "./controllers/deleteMovie.js"
import { movieRecommend } from "./controllers/movieRecommendation.js"

const app = express()
dotenv.config()

// connecting the mongoose cloud database
mongoose.connect(process.env.MONGO_STRING,{})
.then(() => {console.log("connection to mongodb successful")})
.catch(() => {console.log("An error occured, couldn't connect to mongodb")})


// importing mongo schma...
import moviesmodel from "./model/ovies.model.js"


// using json formatted data
app.use(express.json());

// routes
app.post("/api/sendMovie", addMovie)
app.get("/api/getMovie/:movie_id", getMovie)
app.get("/api/getAllMovie", getAllMovie)
app.patch("/api/editMovie", updateData)
app.delete("/api/deleteMovie/:movie_id", deleteMovie)
app.get("/api/movies/openAI/recommendation", movieRecommend)

app.listen(4500, (req,res) => {
    console.log("server running on port localhost:3500")
})