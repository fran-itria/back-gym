require('dotenv').config();
import { Sequelize } from 'sequelize'
import user from "./models/User";


const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gym`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);

user(sequelize)

const { User } = sequelize.models


export { User } /// para poder importar los modelos así: const { Product, User } = require('./db.js');
export const conn = sequelize // para importart la conexión { conn } = require('./db.js');