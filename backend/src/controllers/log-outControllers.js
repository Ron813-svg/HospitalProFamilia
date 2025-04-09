const logOutController = {}

logOutController.logOut = (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Error logging out' })
            }
            res.clearCookie('authToken'); 
            res.status(200).json({ message: 'Logged out successfully' })
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

export default logOutController