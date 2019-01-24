let express = require('express');
let app = express();
let path = require('path');
let customerRoute = require('./routes/customer')
let personRoute = require('./routes/person');
let bodyParser = require('body-parser');

/**
 * 🤝🏻 Takes any incoming json string and creates 
 *  attribute called body
 */
app.use(bodyParser.json());

// 🔗 Request log
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

// 🧑🏻 Routes Middleware
app.use(personRoute);
app.use(customerRoute);

app.use(express.static('public'));

// ⚠ 404 handler 
app.use((req, res, next) => {
  res.status(404).send('404 Not Found :(');
});

// ⚠ 500 handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, '../public/500.html'));
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('\x1b[33m%s\x1b[0m',`Server has started on port ${PORT}`));
