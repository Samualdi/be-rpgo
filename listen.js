
const app = require("./server");

const PORT = process.env.PORT || 3500;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Listening on ${PORT}...`);
});