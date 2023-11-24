"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const cors = require('cors');
const morgan = require('morgan');
const server = (0, express_1.default)();
require('dotenv').config();
server.use(morgan('dev'));
server.use(express_1.default.json());
server.use(cors());
server.get('/allUsers', async (_req, res) => {
    console.log('GETsad');
    try {
        const users = await db_1.User.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});
server.post('/users', async (req, res) => {
    const { name, surname } = req.body;
    try {
        const newUser = await db_1.User.create({ name, surname });
        console.log(newUser);
        res.status(200).json(newUser);
    }
    catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});
module.exports = server;
//# sourceMappingURL=routes.js.map