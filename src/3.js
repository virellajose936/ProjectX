const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to ProjectX!');
});

app.listen(3000, () => {
  console.log('ProjectX is running on port 3000');
});
