let express = require('express');
let router = express.Router();

// QueryString => query property on request object
// localhost:3000/person?name=thomas&age=20
router.get('/person', (req, res) => {
  if (req.query.name) {
    res.send(`You have requeste a person ${req.query.name}`);
  } else {
    res.send('You have requeste a person');
  }
});

// Params property on the request object
router.get('/person/:name', (req, res) => {
  res.send(`You have requeste a person ${req.params.name}`);
});


module.exports = router;