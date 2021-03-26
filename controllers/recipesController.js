const { Recipe, Category } = require('../models');

async function index(req, res) {
  console.log('Hit recipes Index controller');

  try {
    const allRecipes = await Recipe.find();
    res.send(allRecipes);
  } catch(err) {
    console.log(err);
    res.send(500);
  }

  // Recipe.find()
  //   .then((allRecipes) => {
  //     res.send(allRecipes);
  //   });
}

async function show(req, res) {
  console.log('Hit recipes show controller');

  try { 
    const foundRecipe = await Recipe.findById(req.params.recipeId).populate('category').exec();
    res.send(foundRecipe);
  } catch(err) {
    console.log(err);
    res.send(500);
  }

  // Recipe.findById(req.params.recipeId)
  //   .then((foundRecipe) => {
  //     res.send(foundRecipe);
  //   });

  // Recipe.findById(req.params.recipeId, (err, foundRecipe) => {
  //   if (err) {
  //     res.status(500);
  //     console.log(err);
  //   }
  //   res.send(foundRecipe);
  // });
}

async function create(req, res) {
  console.log('Hit recipes create controller');
  const newRecipe = { category, recipeTitle, recipeBody, recipeImg } = req.body;

  try {
    const createdRecipe = await Recipe.create(newRecipe);
    
    // Add recipe id to category model
    const updatedCategory = await Category.findByIdAndUpdate(
      createdRecipe.category,
      { $push: { recipes: createdRecipe._id } },
      { new: true }
    );

    res.send(createdRecipe);
  } catch(err) {
    console.log(err);
    res.send(500);
  }
}

async function update(req, res) {
  console.log('hit update controller');

  const recipeUpdates = { category, title, body, recipeImg } = req.body;

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.recipeId,
      recipeUpdates,
      { new: true }
    );
    res.send(updatedRecipe);

  } catch(err) {
    console.log(err);
    res.send(500);
  }
}

async function remove(req, res) {
  console.log('Hit delete create controller');
  try {
    const removedRecipe = await Recipe.findByIdAndDelete(req.params.recipeId);
    res.send(removedRecipe);
  } catch(err) {
    console.log(err);
    res.send(500);
  }
}

module.exports = {
  index,
  create,
  update,
  remove,
  show
};
