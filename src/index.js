import express from "express";
const app = express();
const port = process.env.PORT || 8080;
import dotenv from "dotenv"
import database from "./database.js"
import userRoutes from "./routes/user.routes.js" 
import pinRoutes from "./routes/pin.routes.js" 

dotenv.config()
//Database
database()

//Middlewares
app.use(express.json())

//Routes
app.use("/api/pins", pinRoutes)
app.use("/api/user", userRoutes)

//Server
app.listen(port, ()=>{
   console.log(`Server running on port ${port}`)
})
