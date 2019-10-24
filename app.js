const Routes = require('./routes');
const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', cors(), Routes);

app.listen(3000, () => console.log('Server started.'));
