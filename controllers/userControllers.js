exports.getUsers = async (req, res, next) => {
    try {
        // Function Goes Here
        res.status(200).send("Hello");
    } catch (error) {
        next(error);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        // Function Goes Here
        res.status(200).send();
    } catch (error) {
        next(error);
    }
};

exports.patchUserById = async (req, res, next) => {
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
