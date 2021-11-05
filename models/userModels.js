const mongoose = require("mongoose");
const User = require("../schemas/userSchema.js");

exports.fetchUsers = async () => {
    const users = await User.find();
    return users;
};

exports.fetchUserByUsername = async (userName) => {
    const user = await User.find({ username: userName });
    return user;
};

exports.editUserByUsername = async (
    userName,
    property_to_change,
    amount_to_increase,
    trophy_to_add
) => {
    const userToUpdate = await User.find({ username: userName });
    // console.log(userToUpdate[0][property_to_change]);
    if (typeof userToUpdate[0][property_to_change] === "number") {
        const updatedUser = await User.updateOne(
            { username: userName },
            {
                $inc: {
                    [property_to_change]: amount_to_increase,
                },
            }
        );
        const updatedUserSucess = await User.find({ username: userName });
        return updatedUserSucess;
    } else if (
        trophy_to_add !== undefined &&
        property_to_change === "trophies"
    ) {
        const trophyListToUpdate = [...userToUpdate[0].trophies, trophy_to_add];
        const updatedUser = await User.updateOne(
            { username: userName },
            {
                $set: {
                    trophies: trophyListToUpdate,
                },
            }
        );
        const updatedUserSucess = await User.find({ username: userName });
        return updatedUserSucess;
    } else return userToUpdate;
};

exports.addUser = async (userData) => {
    if (
        userData.hasOwnProperty("username") === true &&
        userData.hasOwnProperty("password") === true &&
        userData.hasOwnProperty("sprite") === true &&
        userData.hasOwnProperty("xp") === true &&
        userData.hasOwnProperty("trophies") === true &&
        userData.hasOwnProperty("bio") === true &&
        userData.hasOwnProperty("total_distance_covered") === true &&
        userData.hasOwnProperty("total_steps") === true &&
        userData.hasOwnProperty("total_elevation_gain") === true &&
        userData.hasOwnProperty("current_challenge") === true &&
        userData.hasOwnProperty("current_challenge") === true
    ) {
        let userToPost = new User(userData);
        const result = await userToPost.save();
        const updatedUserSucess = await User.find({
            username: userData.username,
        });
        return updatedUserSucess;
    } else {
        return ["Unable to Add User"];
    }
};
