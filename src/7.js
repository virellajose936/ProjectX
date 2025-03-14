const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const name = 'John Doe';
  res.send(`Hello, ${name}!`);
});
