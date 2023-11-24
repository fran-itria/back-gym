require('dotenv').config();
import { Sequelize } from 'sequelize'
import user from "./models/User";


const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gym`,
    {
        logging: false,
        native: false,
    }
);

user(sequelize)

const { User } = sequelize.models


export { User }
export const conn = sequelize