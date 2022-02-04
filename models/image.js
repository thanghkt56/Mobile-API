const mongoose = require("mongoose");

const imageSchema= new mongoose.Schema({
    ticketId: {
        type: String,
        required: [true, "ticketId required"]
    },
    imageUrl: {
        type: String,
        required: [true, "Url required"]
    },
    event_name: String
    },

    {timestamps: true}
);

imageSchema.set("toObject", { virtuals: true });
imageSchema.set("toJSON", { virtuals: true });


const image = mongoose.model("image", imageSchema);
module.exports = image;