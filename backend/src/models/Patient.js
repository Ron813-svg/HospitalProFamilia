import { Schema, model } from "mongoose"

const patientSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    isVerify: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    strict: false
})

export default model("patients", patientSchema)
