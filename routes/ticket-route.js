const express = require('express');
const ticket = require('../models/ticket');
const ticketController = require("./../controllers/ticket-controller");
const router = express.Router();

router.get('/', ticketController.getAllTicket);
router.post('/', ticketController.addTicket);

module.exports = router;