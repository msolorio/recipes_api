const express = require('express');
const router = express.Router();
const { citiesCtrl } = require('../controllers');

router.get('/', citiesCtrl.index);
router.get('/:cityId', citiesCtrl.show);
router.post('/', citiesCtrl.create);

module.exports = router;
