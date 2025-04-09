import { Schema, model } from 'mongoose'

const quoteSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    motive:{
        type: String,
        required: true
    },
    doctorAssigned:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'doctors'
    },
    patientAssigned:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'patients'
    }
},{
    timestamps: true,
    strict: false
})

export default model('quotes', quoteSchema)