const crypto = require('crypto');
const { createSalt, generateHash } = require('../utils/security-utils.js');
const {createUser, validateUser} = require('../models/api-models.js')


exports.registerUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const salt = createSalt();
        const hash = generateHash(userData.password, salt);
        userData.salt = salt;
        userData.hash = hash;
        const registeredUser = await createUser(userData)
        res.status(201).send({registeredUser})
    } catch (error) {
        console.log(error);
        next(error)
    }
    
}

exports.loginUser = async (req, res, next) => {
    try {
        const loginData = req.body
        const loggedInUser = await validateUser(loginData);
        res.status(201).send({ loggedInUser });
        
    } catch (error) {
        
    }
}