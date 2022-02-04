const express = require('express');
const ticket = require('../models/ticket');
const ticketController = require("./../controllers/ticket-controller");
const router = express.Router();

router.route('/')
    .get(ticketController.getAllTicket)
    .post(ticketController.addTicket)
    .patch(ticketController.sellTicket);

module.exports = router;