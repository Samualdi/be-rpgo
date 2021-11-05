const {
    fetchUsers,
    fetchUserByUsername,
    editUserByUsername,
    addUser,
} = require("../models/userModels");

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
        res.status(200).send({ user: fetchedUserByUsername[0] });
    } catch (error) {
        next(error);
    }
};

exports.patchUserByUsername = async (req, res, next) => {
    try {
        const userName = req.params.user_name;
        const property_to_change = req.body.property_to_change;
        const amount_to_increase = req.body.amount_to_increase;
        const trophy_to_add = req.body.trophy_to_add;

        const editedUserByUsername = await editUserByUsername(
            userName,
            property_to_change,
            amount_to_increase,
            trophy_to_add
        );
        res.status(200).send({ user: editedUserByUsername[0] });
    } catch (error) {
        next(error);
    }
};

exports.postUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const postedUser = await addUser(userData);
        res.status(201).send({ user: postedUser[0] });
    } catch (error) {
        next(error);
    }
};
