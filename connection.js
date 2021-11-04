const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";

let db;
if (ENV === "test") {
    db = mongoose
        .connect(process.env.SERVER, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => { })
        .catch((err) => console.log(err));
    } else {
        db = mongoose
            .connect(process.env.SERVER, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {})
            .catch((err) => console.log(err));
}
    
module.exports = db
