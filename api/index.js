const express = require("express");
const dotenv = require('dotenv');
// const fetch = require('node-fetch');
const app = express();
app.use(express.json());

dotenv.config();


app.get("/", async (req, res) => {

    res.send("Express on Vercel")
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;