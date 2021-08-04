import Router from "express"
const router = Router()
import Pin from "../models/Pin.js"

//Create PIN
router.post("/", async (req, res) => {
   try {
      const newPin = new Pin(req.body)
      const savedPin = await newPin.save()
      res.status(200).json(savedPin)
   } catch (e) {
      res.status(500).send("Error")
   }
});

//Get All pins
router.get("/", async (req, res) => {
   try {
      const pins = await Pin.find()
      res.status(200).json(pins)
   } catch (e) {
      res.status(500).json(e)
   }
})

export default router;