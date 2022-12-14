const express = require('express');
const router = express.Router();

const db = require('../Controllers/dataControllers');

router.get('/counts', (req, res) => {
  db.getCounts((data) => {
    res.send(data);
  });
});

router.post('/inccount', (req, res) => {
  db.incCounts((msg) => {
    res.send(msg);
  });
});

module.exports = router;
