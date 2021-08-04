import mongoose from "mongoose"

const db = () => mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
   console.log("Database running")
})

export default db;