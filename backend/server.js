import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import mongoose, { mongo } from "mongoose"
import foodModel from "./models/foodModel.js"
import foodRouter from "./routes/foodRoute.js"



// app config
const app = express()
const PORT = 4000


// middleware
app.use(express.json())
app.use(cors())


// db connection
connectDB();  
// connectToMongoDB();


// api endpoints
app.use('/api/food', foodRouter)
app.use('/images',express.static('uploads'))



app.get("/", (req,res)=>{
    res.send("API Working")
})


app.listen(PORT, ()=>{
    console.log(`Sever Started on http://localhost:${PORT}`)
})

