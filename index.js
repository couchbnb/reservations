const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const DB = require('./database/index.js');

app.use('/', express.static(path.join(__dirname, '/public')))

app.listen(port, () => {
  console.log(`Reservation module listening at http://localhost:${port}`)
})


