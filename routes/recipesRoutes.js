const express = require('express');
const router = express.Router();
const { recipesCtrl } = require('../controllers');

router.get('/', recipesCtrl.index);
router.get('/:recipeId', recipesCtrl.show);
router.post('/', recipesCtrl.create);
router.put('/:recipeId', recipesCtrl.update);
router.delete('/:recipeId', recipesCtrl.remove);

module.exports = router;
