const axios = require('axios')

const validate = async (token) => {
    const secret_key = '<rc3-key';
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    try {
        const { data } = await axios.post(url)
        return data
    } catch (error) {
        return error
    }
}

module.exports = {
    validate
}