const express = require('express');
const router = express.Router();
const { categoriesCtrl } = require('../controllers');

router.get('/', categoriesCtrl.index);
router.get('/:categoryId', categoriesCtrl.show);
router.post('/', categoriesCtrl.create);
router.delete('/:categoryId', categoriesCtrl.remove);

module.exports = router;
