const express = require('express');

const { sendingEmail } = require('../controllers/emailController');

const router = express.Router();

router.post('/', sendingEmail);

module.exports = router;
