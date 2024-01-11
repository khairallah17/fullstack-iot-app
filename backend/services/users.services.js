const user = require("../models/User")

async function getUserByEmail(email) {

    try {

		const foundUser = await user.findOne(email)
        console.log("USER FOUND")
        return foundUser

    } catch (error) {
        return ("user not found")
    }

}

module.exports = {
    getUserByEmail
}