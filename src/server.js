const express = require('express');
const routes = require('./routes');

// Importando o arquivo de conexão com o banco de dados.
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server is running on 3333'));
