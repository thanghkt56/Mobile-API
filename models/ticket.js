const mongoose = require("mongoose");

const ticketSchema= new mongoose.Schema({
    txid: {
        type: String,
        required: [true, "txID required"]
    },

    ticketId: {
        type: String,
        required: [true, "ticket ID required"]
    },
    name: String,
    description: String,
    location: String,
    category: String,
    start: String,
    end: String,
    price: {
        type: String,
        required: [true, "price required"]
    }},
    {timestamps: true}
);

ticketSchema.set("toObject", { virtuals: true });
ticketSchema.set("toJSON", { virtuals: true });


const ticket = mongoose.model("ticket", ticketSchema);
module.exports = ticket;