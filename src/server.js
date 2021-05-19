const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();
const serverPort = 3333;

app.use(express.json());
app.use(routes);

app.listen(serverPort);
console.log(`Server listen on ::: ${serverPort}`);
