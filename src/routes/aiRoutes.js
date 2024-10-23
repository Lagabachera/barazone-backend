const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/summary', authMiddleware, aiController.getSummary);

module.exports = router;
