// const mongoose = require("mongoose");  

// const ENV = process.env.NODE_ENV || "development";

// require("dotenv").config({
//     path: `${__dirname}.env.${ENV}`,
// });

// const config =
//     ENV === "production"
//         ? {
//               connectionString: process.env.MONGODB_URI,
//               ssl: {
//                   rejectUnauthorized: false,
//               },
//           }
//         : {};

// if (!process.env.MONGODB_URI) {
//     throw new Error("Datbase not set");
// }

//  db = mongoose
//      .connect(process.env.MONGODB_URI, {
//          useNewUrlParser: true,
//          useUnifiedTopology: true,
//      })
//      .then(() => {})
//      .catch((err) => console.log(err));

// module.exports = db;

