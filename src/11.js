const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    res.status(400).send('No user ID provided.');
  } else {
    res.json({ message: `Welcome, ${userId}!` });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
