const express = require('express');
const app = express();

// Environement variable
require('dotenv').config();

app.get('/', function(req, res) {
  res.send('Salut tristan');
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));