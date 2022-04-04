const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
    app.use(express.static('public'));
    app.use(express.static('public/index.html'));
});

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

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});