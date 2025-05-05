const express = require('express');
const cors = require('cors');
const quotes = require('./quotes.json');

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/quote', (req, res) => {
  const feeling = req.query.feeling?.toLowerCase();
  const category = quotes[feeling] || quotes.inspired;
  const randomQuote = category[Math.floor(Math.random() * category.length)];
  res.json({ text: randomQuote, author: 'For You' });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
