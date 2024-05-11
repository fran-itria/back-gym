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
const cors = require("cors")
const morgan = require("morgan");
const server = express();
require("dotenv").config();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
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
server.use("/mails", mails)

module.exports = server;
