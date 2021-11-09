const mongoose = require('mongoose');
const LoginUser = require('../schemas/loginUserSchema.js');
const { generateHash } = require('../utils/security-utils.js');

exports.createUser = async (userData) => {
    const userToRegister = new LoginUser(userData)
    const result = await userToRegister.save();
    console.log(result);

    return result;
}

exports.validateUser = async (loginData) => {
    const result = await LoginUser.findOne({
        username: loginData.username
    })
    if (result.hash === generateHash(loginData.password, result.salt)) {
        console.log(result);
        return result
    } else {
        return {msg: "Incorrect username or password"}
    }
}