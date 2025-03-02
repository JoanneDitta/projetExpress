const express = require('express');
const router = express.Router();
const heyController = require('../controllers/heyController');

router.get('/test', heyController.getHey);

module.exports = router;
