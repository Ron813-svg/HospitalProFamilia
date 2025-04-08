const doctorsControllers = {}

import doctorsModels from "../models/Doctors.js"

doctorsControllers.getDoctors = async (req, res) => {
    const doctors = await doctorsModels.find()

    res.json(doctors)
}

doctorsControllers.postDoctors = async (req, res) => {
    const { name , specialty, email, password } = req.body;
    const newDoctor = new doctorsModels({ name , specialty, email, password })
    await newDoctor.save()
    res.json({message: "Doctor Added"})
}

doctorsControllers.updateDoctors =  async (req, res) => {
    const { name , specialty, email, password } = req.body;
    const updatedDoctors = await doctorsControllers.findByIdAndUpdate(req.params.id, { name , specialty, email, password }, {new: true})
    res.json({message: "Doctor Updated"})
}

doctorsControllers.deleteDoctors = async (req, res) => {
    await doctorsModels.findByIdAndDelete( req.params.id )
    res.json({message: "Doctor deleted"})
}

export default doctorsControllers