import express from "express"
import userRouter from "./routes/user.js"
import { config } from "dotenv"

export const app =  express()

config({
  path: './data/config.env'
})

//its middleware we use when we have to use json data
app.use(express.json())
app.use("/users", userRouter);




app.get("/", (req, res) => {
  res.send("nice working")
})
