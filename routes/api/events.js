const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

// Get '/api/events'
router.get('/', eventsCtrl.index);


module.exports = router;