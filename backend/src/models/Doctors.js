import { Schema, model } from "mongoose"

const doctorSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    specialty:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("doctors", doctorSchema)