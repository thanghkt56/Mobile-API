const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");
const xss = require("xss-clean");
const cors = require("cors");
const app = express();
require("dotenv").config();
/*
const whitelist = process.env.ACCESS_CONTROL_ALLOW_ORIGIN.split(",");
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) callback(null, true);
    else if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  credentials: true,
};*/

//app use
//app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());

//routes
const imageRoute = require("./routes/image-route");
const ticketRoute = require("./routes/ticket-route");

app.use("/api/v1/image/", imageRoute);
app.use("/api/v1/ticket/", ticketRoute);

module.exports = app;
