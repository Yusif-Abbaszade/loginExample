var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');

router.get('/login', loginController.indexGet);
router.post('/login', loginController.indexPost);
module.exports = router;