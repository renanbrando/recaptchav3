const router = require('express').Router()
const { validate } = require('../controllers/recaptchaController')

router.post('/', validate)

module.exports = router