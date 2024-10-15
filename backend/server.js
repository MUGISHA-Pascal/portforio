const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { text } = require("body-parser");
const server = express();
server.use(cors());
server.use(express.json());
server.post("/api/message", (req, res) => {
  const { email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      email: "mugishapascal2008@gmail.com",
      pass: "mama2008@",
    },
  });
  const emailoptions = {
    from: email,
    to: "mugishapascal2008@gmail.com",
    subject: "message from the portforio",
    text: message,
  };
  transporter.sendMail(emailoptions, function (error, info) {
    if (error) {
      console.log(`the error is ${error}`);
    } else {
      console.log("message sent is".info.response);
    }
  });
});
server.listen(4000, () => {
  console.log("the server is running");
});
