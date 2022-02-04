const Image = require('./../models/image');
const sendRes = require("../utils/send-res");


exports.getImage = async (req, res, next) => {
    try {
        const doc = await Image.findOne({ticketId: req.params.id},'-ticketId');
        if (!doc) {
            return sendRes.resError(res, "Missing ticket");
        }
        return sendRes.resSuccess(res, doc);   
    } catch (err) {
        return sendRes.resError(res, "Something's wrong");
    }
};
