const patientController = {}

import patientSchema from '../models/Patient.js'

patientController.getPatients = async (req, res) => {
    const patients = await patientSchema.find()
    res.json(patients)
}


patientController.updatePatients = async (req, res) => {
    const { name, age, email, password, phone } = req.body;
    const updatedPatient = await patientSchema.findByIdAndUpdate(req.params.id, { name, age, email, password, phone }, { new: true })
    res.json({ message: "Patient Updated" })
}

patientController.deletePatients = async (req, res) => {
    await patientSchema.findByIdAndDelete(req.params.id)
    res.json({ message: "Patient deleted" })
}

export default patientController