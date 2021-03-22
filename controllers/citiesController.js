const { City } = require('../models');


function index(req, res) {
  console.log('Hit cities Index controller');
  
  // Get all city data populated with post data
  City.find()
    .populate('posts')
    .exec()
    .then((allCities) => res.send(allCities))
    .catch((err) => {
      console.log('Error finding all cities:', err);
    });
}

async function create(req, res) {
  const newCity = { name, cityImg } = req.body;
  newCity.posts = [];

  const createdCity = await City.create(newCity);

  res.send(createdCity);
}

async function show(req, res) {
  City.findById(req.params.cityId)
    .populate('posts')
    .exec()
    .then((foundCity) => res.send(foundCity))
    .catch((err) => {
      console.log('Error finding city by id:', err);
    });
}

module.exports = {
  index,
  create,
  show
};