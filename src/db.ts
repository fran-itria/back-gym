require('dotenv').config();
import { Sequelize } from 'sequelize'
import user from "./models/User";
import gym from './models/Gym'
import rutina from './models/Rutina';
import day from './models/Day';
import ejercicio from './models/Ejercicio';


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
rutina(sequelize)
day(sequelize)
ejercicio(sequelize)

const { User, Gym, Rutina, Day, Ejercicio } = sequelize.models

// GYM - USER
Gym.hasMany(User, { foreignKey: 'GymId' })
User.belongsTo(Gym, { foreignKey: 'GymId' })
// USER - RUTINA
User.hasMany(Rutina, { foreignKey: 'UserId' })
Rutina.belongsTo(User, { foreignKey: 'UserId' })
// RUTINA - DAY
Rutina.hasMany(Day, { foreignKey: 'RutinaId' })
Day.belongsTo(Rutina, { foreignKey: 'RutinaId' })
// DAY - EJERCICIO
Day.hasMany(Ejercicio, { foreignKey: 'DayId' })
Ejercicio.belongsTo(Day, { foreignKey: 'DayId' })



export { User, Gym, Rutina, Day, Ejercicio }
export const conn = sequelize