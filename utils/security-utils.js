const crypto = require('crypto');

exports.createSalt = () => {
    const salt = crypto.randomBytes(64).toString('hex');
    return salt;
}

exports.generateHash = (password, salt) => {
    const hash = crypto.pbkdf2Sync(password, salt, 5000, 64, "sha512").toString('hex');
    return hash;
}

