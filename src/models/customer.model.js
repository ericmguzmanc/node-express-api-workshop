let mongoose = require('mongoose');

/**
 * ⚠ This will connection will be moved to a separate file
 * 🚧 Database connection
 */ 
const server = 'ds046939.mlab.com:46939';
const database = 'node-express-api-workshop-db';
const user = 'ericmguzmanc';
const password = 'abc123'; 

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

// 🧑🏻 Customer Schema definition
let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);