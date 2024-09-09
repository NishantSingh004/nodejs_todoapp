import express from "express"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import { errorMiddleware } from "./middleware/error.js"
import cors from "cors";

export const app =  express()

config({
  path: './data/config.env'
})

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))

//credentials: This option indicates whether the browser should include credentials (like cookies, HTTP authentication, or client-side SSL certificates) with the requests made to the server. Setting credentials: true allows credentials to be included in requests from the specified origin.and if credentials are not included then cookies etc wont we sent to front end

// the proertiee of cookie stric =  Cookies with SameSite=Strict are not sent with cross-site requests at all, regardless of CORS settings. This means that if you have a front-end running on frontend.com and your Node.js backend is on api.backend.com, a Strict cookie on api.backend.com will not be sent when making requests from frontend.com.Impact on CORS: Even if your Node.js CORS settings allow frontend.com to access resources on api.backend.com, the cookie will not be sent with the request because of the Strict setting. This can be problematic for authentication tokens or session cookies that rely on being sent with the request.


//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("nice working")
})

//error handling middleware needs to be present at end 
app.use(errorMiddleware)
