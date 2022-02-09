const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../../controllers/api/tickets');

// Get '/api/tickets'
router.get('/', ticketsCtrl.index);



module.exports = router;