const express = require('express');
const helmet = require('helmet');
const authorization = require('./router/authorization/index');

const app = express();

app.use(helmet());

app.listen(3000, () => console.log('Server started at port 3000'));

app.get('/authorization', authorization);
