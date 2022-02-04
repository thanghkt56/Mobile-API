const Ticket = require('./../models/ticket');
const sendRes = require("../utils/send-res");


exports.getAllTicket = async (req, res, next) => {
    try {
        const doc = await Ticket.find().select('-__v -txid ');
        if (!doc) {
            return sendRes.resError(res, "No ticket for sale");
        }
        return sendRes.resSuccess(res, doc);   
    } catch (err) {
        return sendRes.resError(res, "Something's wrong");
    }
};
exports.addTicket = async (req, res, next) => {
    const ticket = new Ticket(req.body);
    try {
        await ticket.save();
        return sendRes.resSuccess(res,ticket);
    } catch (err) {
        //console.log(err);
        return sendRes.resError(res, "Save ticket failed");
    }
};
