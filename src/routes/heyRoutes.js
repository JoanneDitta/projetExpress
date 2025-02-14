const express = require('express');
const router = express.Router();
const heyController = require('../controllers/heyController');

router.get('/hey', heyController.getHey);

module.exports = router;
