import express from 'express'
import logOutController from '../controllers/log-outControllers.js'

const router = express.Router()

router.post('/', logOutController.logOut)

export default router