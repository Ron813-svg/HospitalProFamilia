import doctorsModel from "../models/Doctors.js"
import patientsModel from "../models/Patient.js"
import bcryptjs from "bcryptjs"
import  JsonWebToken  from "jsonwebtoken"
import { config } from "../config.js"

const logInController = {}

logInController.logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        let userFound;
        let userType;
        if(email === config.emailAdmin.email && password === config.emailAdmin.password){
           userType = "admin"
           userFound = {_id: "admin"}
        } else{
            userFound = await doctorsModel.findOne({ email })
            userType = "doctor"
        }
        if(!userFound){
            userFound = await patientsModel.findOne({ email })
            userType = "patient"
        }
        if(!userFound){
            console.log("User not found")
            return res.status(401).json({ message: "Invalid email or password" })
        }
        if(userType !== "admin"){
            const isMatch = await bcryptjs.compare(password, userFound.password)
            if(!isMatch){
                console.log("Invalid password")
                return res.status(401).json({ message: "Invalid email or password" })
            }
        }
        JsonWebToken.sign(
            {user:userFound._id, userType},
            config.JWT.secret,      
            {expiresIn: config.JWT.expiresIn},
            (error, token) => {
                if(error){
                    console.log("Error generating token")
                    return res.status(500).json({ message: "Error generating token" })
                }
                res.cookie("authToken", token)
                res.status(200).json({
                    message: "Login successful",
                    token,
                    userType,
                    userId: userFound._id
                })
            }
        )
    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
}

export default logInController