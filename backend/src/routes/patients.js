import express from 'express'
import patientController from '../controllers/patientControllers.js'

const router = express.Router()

router.route('/').get(patientController.getPatients)


router.route('/:id')
.put(patientController.updatePatients)
.delete(patientController.deletePatients)

export default router