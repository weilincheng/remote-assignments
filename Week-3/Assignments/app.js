const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(cookieParser());

// Routing for http://localhost:3000
app.get('/', (req, res) => {
    app.use(express.static('public'));
});

// Routing for http://localhost:3000/data?number=123
app.get('/data', (req, res) => {
    const inputNumber = req.query.number;
    if (!inputNumber) {
        res.send('Lack of Parameter')
    } else if (!Number.isInteger(+inputNumber)) {
        res.send('Wrong Parameter')
    } else {
        const result = (( 1 + +inputNumber) * +inputNumber) / 2;
        res.send(`The result is: ${result}`);
    }
});

// Routing for http://localhost:3000/myName
app.get('/myName', (req, res) => {
    const user_name = req.cookies['name']; 
    if (user_name) {
        console.log("cookie exists")
        res.send(`${user_name}`)
    } else {
        console.log("cookie does not exist");
        res.redirect('/name.html');
    }
});

// Routing for http://localhost:3000/trackName?name=abc
app.get('/trackName', (req, res) => {
    const inputName = req.query.name;
    if (!inputName) {
        res.send('Lack of Parameter')
    } else {
        console.log('cookie saved');
        res.cookie('name', inputName, {expires: new Date(Date.now() + 600000)}).send("Cookie saved");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});