const { Category } = require('../models');


function index(req, res) {
  console.log('Hit categories Index controller');
  
  // Get all category data populated with recipe data
  Category.find()
    .populate('recipes')
    .exec()
    .then((allcategories) => res.send(allcategories))
    .catch((err) => {
      console.log('Error finding all categories:', err);
    });
}

async function create(req, res) {
  const newCategory = { categoryName, categoryImg } = req.body;
  newCategory.recipes = [];

  const createdCategory = await Category.create(newCategory);

  res.send(createdCategory);
}

async function show(req, res) {
  console.log(req.params.categoryId);

  Category.findById(req.params.categoryId)
    .populate('recipes')
    .exec()
    .then((foundCategory) => {
      console.log('found category:', foundCategory);
      res.send(foundCategory)
    })
    .catch((err) => {
      console.log('Error finding category by id:', err);
    });
}

async function remove(req, res) {
  await Category.findByIdAndDelete(req.params.categoryId);

  res.sendStatus(204);
}

module.exports = {
  index,
  create,
  show,
  remove
};