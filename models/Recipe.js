const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  recipeName: {
    type: String,
    required: true
  },
  recipeBody: {
    type: String,
    required: true
  },
  recipeImg: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
