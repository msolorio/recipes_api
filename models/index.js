const mongoose = require('mongoose');
const Category = require('./Category');
const Recipe = require('./Recipe');
connectionString = process.env.MONGODB_URI || 'mongodb://localhost/recipes_code_along';
// Can leave out the port number
// Port defaults to 27017

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// mongoose.connection.on('connected', () => {
//   console.log(`Connected to ${connectionString}`);
// });

mongoose.connection.once('open', () => {
  console.log(`Connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose is disconnected`);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongo connection error:', err);
});

module.exports = {
  Category,
  Recipe
};