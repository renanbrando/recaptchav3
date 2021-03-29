const recaptchaService = require('../services/recaptchaService')

const validate = async (req, res) => {
    const { token } = req.body 
    const response = await recaptchaService.validate(token)
    return res.send(response)
}

module.exports = {
    validate
}