import cookieParser from "cookie-parser"
import express from "express"
import doctorsRoutes from "./src/routes/doctors.js"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/doctors", doctorsRoutes)

export default app