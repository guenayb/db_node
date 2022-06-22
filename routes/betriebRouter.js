const express = require('express');
const betriebController = require('../controller/betriebController');
const router = express.Router();

router.route('/betriebsstelle').get(betriebController.getAll);

router.route('/betriebsstelle/:id').get(betriebController.getOne);

module.exports = router;
