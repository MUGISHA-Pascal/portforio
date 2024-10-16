"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.post("/api/message", (req, res) => {
    const data = req.body;
    console.log(data);
    const transporter = nodemailer_1.default.createTransport({
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
