const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: "weilin",
    password: "12345",
    database: "assignment",
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});

app.use(express.static("public"));

// Serve index.html as Login form
app.get("/", (req, res) => {});

// Insert new user data into MySQL
app.get("/createuser", (req, res) => {
    const sql =
        "INSERT INTO user(email, password) VALUES ('ttt@gmail.com', '00000');";
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send("User created...");
    });
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
