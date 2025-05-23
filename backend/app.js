import cookieParser from "cookie-parser"
import express from "express"
import doctorRoutes from "./src/routes/doctors.js"
import patientRoutes from "./src/routes/patients.js"
import quoteRoutes from "./src/routes/quotes.js"
import logInRoutes from "./src/routes/log-in.js"
import logOutRoutes from "./src/routes/log-out.js"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/doctors", doctorRoutes)
app.use("/api/patients", patientRoutes)
app.use("/api/quotes", quoteRoutes)
app.use("/api/login", logInRoutes)
app.use("/api/logout", logOutRoutes)

export default app