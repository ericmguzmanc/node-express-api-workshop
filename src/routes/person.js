let express = require('express');
let router = express.Router();

router.get('/person', (req, res) => {
  res.send('You have requeste a person');
});

module.exports = router;