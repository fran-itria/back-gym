import express from "express";
import user from "./routes/user";
import gym from "./routes/gym";
import routine from "./routes/routine";
import day from "./routes/day";
import exercise from "./routes/exercise";
import warmUp from "./routes/warmUp";
import id from "./routes/idRegistro";
import meals from "./routes/meals";
import loads from "./routes/loads";
import extra from "./routes/extra";
import shift from "./routes/shift";
import payments from "./routes/payments";
import mails from "./routes/mail";
import path from 'path';

const cors = require("cors")
const morgan = require("morgan");
const server = express();
require("dotenv").config();

server.use(morgan("dev"));
server.use(express.json());
// server.options("*", cors());
// server.use(cors({
//     origin: (origin: string, callback: any) => {
//         if (origin === "http://127.0.0.1:5173" || origin === "https://pro-active-center.vercel.app") {
//             return callback(null, true);
//         }

//         if (!origin) {
//             return callback(null, true);
//         }

//         return callback(new Error("No tienes permisos para acceder a esta API"));
//     },
// }));
server.use(cors());

server.use('/static', express.static(path.join(__dirname, 'handlers/mails/html')));

server.use("/user", user);
server.use("/gym", gym);
server.use("/rutina", routine);
server.use("/day", day);
server.use("/ejercicio", exercise);
server.use("/cargas", loads);
server.use("/calentamiento", warmUp);
server.use("/idregistro", id);
server.use("/comidas", meals);
server.use("/extra", extra);
server.use("/shift", shift);
server.use("/payments", payments)
server.use("/mails", mails);

server.get("/", (_req, res) => {
    res.json({ message: "API is working" });
});

module.exports = server;
