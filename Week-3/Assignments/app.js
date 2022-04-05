const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));

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
app.get('myName', (req, res) => {

});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});