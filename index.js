const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const Port = 5000;
const api = require('./src/api');
const path = require('path');
const { stat } = require('fs');

app.use(bodyparser.json());
app.use('/api/v1', api);

app.use(express.static(path.join(__dirname, 'src')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src','index.js'));
});


app.listen(Port, () => console.log(`Your server is running on https://${Port}`));