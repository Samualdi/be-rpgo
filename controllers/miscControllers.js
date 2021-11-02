exports.getNoPathMessage = (req, res) => {
    res.status(404).send({ message: "No Results for this Path" });
};
