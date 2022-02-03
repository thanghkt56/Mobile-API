const mongoose = require("mongoose");

const imageSchema= new mongoose.Schema({
    ticket: {
        type: String,
        required: [true, "ticket required"]
    },
    path: {
        type: String,
        required: [true, "path required"]
    }},
    {timestamps: true}
);

imageSchema.set("toObject", { virtuals: true });
imageSchema.set("toJSON", { virtuals: true });


const image = mongoose.model("image", imageSchema);
module.exports = image;