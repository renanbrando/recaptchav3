const axios = require('axios')

const validate = async (token) => {
    const secret_key = '6Lem2ZMaAAAAAEVJa0Exdt4LsX2Muz4pX7WIVOA0';
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