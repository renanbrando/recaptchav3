const router = require('express').Router()
const recaptchaRouter = require('../routes/recaptchaRouter')

router.use('/recaptcha', recaptchaRouter)


module.exports = router
