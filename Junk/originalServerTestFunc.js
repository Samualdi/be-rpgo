app.post("/users", (req, res) => {
    // console.log(req);
    usersCollection
        .insertOne(req.body)
        .then((response) => {
            console.log("sucess");
            res.status(201).send({ message: "Added User" });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.get("/users", (req, res) => {
    db.collection("users")
        .find()
        .toArray()
        .then((response) => {
            console.log("response received");
            res.send(response);
        });
});
