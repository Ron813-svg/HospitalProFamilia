import express from  "express"
import doctorsController from "../controllers/doctorsControllers.js"

const router = express.Router()

router.route("/").get(doctorsController.getDoctors)
.post(doctorsController.postDoctors)

router.route("/:id")
.put(doctorsController.updateDoctors)
.delete(doctorsController.deleteDoctors)

export default router