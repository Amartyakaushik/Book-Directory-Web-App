const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const Port = 5000;
const api = require('./src/api');

app.use(bodyparser.json());
app.use('/api/v1', api);




app.listen(Port, () => console.log(`Your server is running on https://${Port}`));