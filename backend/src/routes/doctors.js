import express from  "express"
import doctorsController from "../controllers/doctorsControllers.js"

const router = express.Router()

router.route("/").get(doctorsController.getDoctors)


router.route("/:id")
.put(doctorsController.updateDoctors)
.delete(doctorsController.deleteDoctors)

export default router