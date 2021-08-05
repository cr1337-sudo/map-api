import express from "express";
const app = express();
const port = process.env.PORT || 8080;
import dotenv from "dotenv"
import cors from "cors"
import database from "./database.js"
import userRoutes from "./routes/user.routes.js" 
import pinRoutes from "./routes/pin.routes.js" 

dotenv.config()
//Database
database()

//Middlewares
app.use(express.json())
//Cors config
app.use(cors({
  origin:"https://map-ui.vercel.app",
  methods:["GET", "POST", "PUT", "DELETE"]
}))

//Routes
app.use("/api/pins", pinRoutes)
app.use("/api/user", userRoutes)

//Server
app.listen(port, ()=>{
   console.log(`Server running on port ${port}`)
})
