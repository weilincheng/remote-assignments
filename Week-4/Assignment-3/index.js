const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: "weilin",
    password: "12345",
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
