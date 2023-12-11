require('dotenv').config();
import { Sequelize } from 'sequelize'
import user from "./models/User";
import gym from './models/Gym'
import rutina from './models/Rutina';
import day from './models/Day';
import ejercicio from './models/Ejercicio';
import calentamiento from './models/Calentamiento'


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
calentamiento(sequelize)

const { User, Gym, Rutina, Day, Ejercicio, Calentamiento } = sequelize.models

// GYM - USER
Gym.hasMany(User, { foreignKey: 'GymId' })
User.belongsTo(Gym, { foreignKey: 'GymId' })

// USER - RUTINA
User.hasMany(Rutina, { foreignKey: 'UserId' })
Rutina.belongsTo(User, { foreignKey: 'UserId' })
// RUTINA - DAY
Rutina.hasMany(Day, { foreignKey: 'RutinaId' })
Day.belongsTo(Rutina, { foreignKey: 'RutinaId' })

// USER - CALENTAMIENTO
User.hasMany(Calentamiento, { foreignKey: 'UserId' })
Calentamiento.belongsTo(User, { foreignKey: 'UserId' })
// CALENTAMIENTO - DAY
Calentamiento.hasMany(Day, { foreignKey: 'CalentamientoId' })
Day.belongsTo(Calentamiento, { foreignKey: 'CalentamientoId' })

// DAY - EJERCICIO
Day.hasMany(Ejercicio, { foreignKey: 'DayId' })
Ejercicio.belongsTo(Day, { foreignKey: 'DayId' })



export { User, Gym, Rutina, Day, Ejercicio, Calentamiento }
export const conn = sequelize