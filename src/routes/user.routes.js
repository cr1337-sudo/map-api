import bcrypt, { hash } from "bcrypt"
import Router from "express"
const router = Router()
import User from "../models/User.js"

//Register
router.post("/register", async (req, res) => {
   try {
      const { username, email, password } = req.body;
      //Generate new pass
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      //Create and save user
      const newUser = new User({ username, email, password: hashedPassword })
      const savedUser = await newUser.save()
      res.status(200).json(savedUser)
   } catch (e) {
      res.status(500).json(e)
   }
})

//Login
router.post("/login", async (req, res) => {
   try {
      const { username, password } = req.body;
      //Check if user exists 
      const user = await User.findOne({ username })
      if (user) {
         //Validate password
         const checkPassword = await bcrypt.compare(password, user.password)
         if (checkPassword) {
            res.json({ "user": user })
         }
      }
      res.status(500).json({ "error": "Invalid username or password" })
   } catch (e) {
      res.status(500).json({ "error": "Both fields are required" })
   }
})

export default router;