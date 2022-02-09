const express = require('express');
const router = express.Router();
const tablesCtrl = require('../../controllers/api/tables');

// Get '/api/tables'
 router.get('/', tablesCtrl.index);

module.exports = router;