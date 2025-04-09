import express from 'express'
import quotesController from '../controllers/quotesControllers.js'

const router = express.Router()
router.route('/').get(quotesController.getQuotes)
.post(quotesController.postQuotes)

router.route('/:id')
.put(quotesController.updateQuotes)
.delete(quotesController.deleteQuotes)

export default router
