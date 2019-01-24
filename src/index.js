let express = require('express');
let app = express();
let personRoute = require('./routes/person');

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`);
  
  next();
});
app.use(personRoute);
app.use(express.static('public'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('\x1b[33m%s\x1b[0m',`Server has started on port ${PORT}`));
