const Ticket = require('./../models/ticket');
const sendRes = require("../utils/send-res");
const genSig = require("../utils/signature");
const axios = require('axios');

exports.getAllTicket = async (req, res, next) => {
    try {
        const doc = await Ticket.aggregate([
            { "$group": { 
              "_id": "$name", 
              "doc": { "$first": "$$ROOT" }
            }},
            { "$replaceRoot": {
              "newRoot": "$doc"
            }}
          ])
        //const doc = await Ticket.find().select('-__v');
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
exports.sellTicket = async (req, res, next) => {
    try {
        const doc = await Ticket.findOneAndDelete({ticketId:req.body.ticketId})
        if (!doc) {
            return sendRes.resError(res, "Invalid ticketId");
        }
        let Signature = genSig.genSignature(doc.txid);
        let c_res = await axios.post('http://34.71.245.146/transaction', {
            txOutId: doc.txid,
            address: req.body.address,
            signature: Signature
        });
        return sendRes.resSuccess(res, doc);
    } catch (err) {
        return sendRes.resError(res, "Something's wrong");
    };
};
