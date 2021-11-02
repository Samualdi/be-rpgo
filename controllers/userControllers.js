const { fetchUsers, fetchUserByUsername } = require("../models/userModels");

exports.getUsers = async (req, res, next) => {
    try {
        const fetchedUsers = await fetchUsers();
        console.log("fetchUsers worked");
        res.status(200).send({ users: fetchedUsers });
    } catch (error) {
        next(error);
    }
};

exports.getUserByUsername = async (req, res, next) => {
    try {
        const userName = req.params.user_name;
        console.log(userName);
        const fetchedUserByUsername = await fetchUserByUsername(userName);
        console.log("fetchUserByUsername worked");
        res.status(200).send({ user: fetchedUserByUsername });
    } catch (error) {
        next(error);
    }
};

exports.patchUserByUsername = async (req, res, next) => {
    try {
        // Function Goes Here
        res.status(200).send();
    } catch (error) {
        next(error);
    }
};

exports.postUser = async (req, res, next) => {
    try {
        // Function Goes Here
        res.status(201).send();
    } catch (error) {
        next(error);
    }
};
