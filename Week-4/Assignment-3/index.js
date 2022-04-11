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

// Serve member.html after a successful login
app.get("/member", (req, res) => {
    res.redirect("/member.html");
});

// Check email
app.get("/checkEmail", (req, res) => {
    const email = req.query.email;
    const sql = `SELECT * FROM user WHERE email='${email}';`;
    console.log(`Checking email: ${email}`);
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        if (result.length > 0) {
            console.log("Email exist. Response is true");
            res.send(true);
        } else {
            console.log("Email does not exist. Response is false");
            res.send(false);
        }
    });
});

// Check email
app.get("/checkPassword", (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const sql = `SELECT * FROM user WHERE email='${email}' AND password='${password}';`;
    console.log(`Checking password: ${password} against email: ${email}`);
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        if (result.length > 0) {
            console.log("Password matches email. Response is true");
            res.send(true);
        } else {
            console.log("Password does not match email. Response is false");
            res.send(false);
        }
    });
});

// Insert new user data into MySQL
app.get("/createUser", (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const sql = `INSERT INTO user(email, password) VALUES ('${email}', '${password}');`;
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
