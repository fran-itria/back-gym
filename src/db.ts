require('dotenv').config();
import { Sequelize } from 'sequelize'
import user from "./models/User";
import gym from './models/Gym'


const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gym`,
    {
        logging: false,
        native: false,
    }
);

user(sequelize)
gym(sequelize)

const { User, Gym } = sequelize.models

// GYM - USER
Gym.hasMany(User, { foreignKey: 'GymId' })
User.belongsTo(Gym, { foreignKey: 'GymId' })

export { User, Gym }
export const conn = sequelize