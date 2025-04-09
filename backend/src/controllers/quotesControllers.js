const quotesController = {}

import quoteSchema from '../models/Quotes.js'

quotesController.getQuotes = async (req, res) => {
    const quotes = await quoteSchema.find()
    res.json(quotes)
}

quotesController.postQuotes = async (req, res) => {
    const { date, time, motive, doctorAssigned, patientAssigned } = req.body
    const newQuote = new quoteSchema({ date, time, motive, doctorAssigned, patientAssigned })
    await newQuote.save()
    res.json({ message: "Quote Created" })
}

quotesController.updateQuotes = async (req, res) => {
    const { date, time, motive, doctorAssigned, patientAssigned } = req.body
    const updatedQuote = await quoteSchema.findByIdAndUpdate(req.params.id, { date, time, motive, doctorAssigned, patientAssigned }, { new: true })
    res.json({ message: "Quote Updated" })
}

quotesController.deleteQuotes = async (req, res) => {
    await quoteSchema.findByIdAndDelete(req.params.id)
    res.json({ message: "Quote deleted" })
}

export default quotesController