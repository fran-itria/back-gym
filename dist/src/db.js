"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = exports.User = void 0;
require('dotenv').config();
const sequelize_1 = require("sequelize");
const User_1 = __importDefault(require("./models/User"));
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gym`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
(0, User_1.default)(sequelize);
const { User } = sequelize.models;
exports.User = User;
exports.conn = sequelize; // para importart la conexión { conn } = require('./db.js');
//# sourceMappingURL=db.js.map