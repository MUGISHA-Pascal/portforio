"use strict";
const express = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");
const cors = require("cors");
const { text } = require("body-parser");
const server = express();
server.use(cors());
server.use(express.json());
server.post("/api/message", (req, res) => {
    const data = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "mugishapascal2008@gmail.com",
            pass: "xaqz sncc fvva eyon",
        },
    });
    const emailoptions = {
        from: data.email,
        to: "mugishapascal2008@gmail.com",
        subject: "message from the portforio",
        text: data.message,
    };
    transporter.sendMail(emailoptions, function (error, info) {
        if (error) {
            console.log(`the error is ${error}`);
        }
        else {
            console.log("message sent is" + info.response);
            res.send("message sent");
        }
    });
});
const port = process.env.PORT;
server.listen(port, () => {
    console.log("the server is running " + port);
});
