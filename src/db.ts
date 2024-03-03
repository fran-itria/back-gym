require('dotenv').config();
import { Sequelize } from 'sequelize'
import user from "./models/User";
import gym from './models/Gym'
import routine from './models/Routine';
import day from './models/Day';
import exercise from './models/Exercise';
import warmUp from './models/WarmUp'
import idRegistro from './models/IdRegistro'
import meals from './models/Meals'
import extraTraining from './models/ExtraTraining'
import loads from "./models/Loads"
import shift from "./models/Shift"
import payments from "./models/Payments"


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sequelize = new Sequelize(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`,
    {
        logging: false,
        native: false,
        dialectOptions: {
            ssl: {
                require: true,
            }
        }
    }
);

user(sequelize)
gym(sequelize)
routine(sequelize)
day(sequelize)
exercise(sequelize)
warmUp(sequelize)
idRegistro(sequelize)
meals(sequelize)
extraTraining(sequelize)
loads(sequelize)
shift(sequelize)
payments(sequelize)

const { User, Gym, Routine, Day, Exercise, WarmUp, IdRegistro, Meals, ExtraTraining, Loads, Shift, Payments} = sequelize.models

// GYM - USER
Gym.hasMany(User, { foreignKey: 'GymId' })
User.belongsTo(Gym, { foreignKey: 'GymId' })

// USER - RUTINA
User.hasMany(Routine, { foreignKey: 'UserId' })
Routine.belongsTo(User, { foreignKey: 'UserId' })
// RUTINA - DAY
Routine.hasMany(Day, { foreignKey: 'RoutineId' })
Day.belongsTo(Routine, { foreignKey: 'RoutineId' })

// USER - CALENTAMIENTO
User.hasMany(WarmUp, { foreignKey: 'UserId' })
WarmUp.belongsTo(User, { foreignKey: 'UserId' })
// CALENTAMIENTO - DAY
WarmUp.hasMany(Day, { foreignKey: 'WarmUpId' })
Day.belongsTo(WarmUp, { foreignKey: 'WarmUpId' })

// DAY - EJERCICIO
Day.hasMany(Exercise, { foreignKey: 'DayId' })
Exercise.belongsTo(Day, { foreignKey: 'DayId' })
// EJERCICIO - CARGAS
Exercise.hasMany(Loads, { foreignKey: "ExerciseId" })
Loads.belongsTo(Exercise, { foreignKey: "ExerciseId" })

// USER - COMIDAS
User.hasMany(Meals, { foreignKey: 'UserId' })
Meals.belongsTo(User, { foreignKey: 'UserId' })

// USER - EJERCICIO EXTRA
User.hasMany(ExtraTraining, { foreignKey: "UserId" })
ExtraTraining.belongsTo(User, { foreignKey: "UserId" })

// USER - TURNO
User.hasMany(Shift, { foreignKey: "UserId" })
Shift.belongsTo(User, { foreignKey: "UserId" })

// GYM - TURNO
Gym.hasMany(Shift, {foreignKey: 'GymId'})
Shift.belongsTo(Gym, {foreignKey: 'GymId'})

// GYM - PAGOS
Gym.hasMany(Payments, {foreignKey: 'GymId'})
Payments.belongsTo(Gym, {foreignKey: 'GymId'})

// USER - PAGOS
User.hasMany(Payments, {foreignKey: 'UserId'})
Payments.belongsTo(User, {foreignKey: 'UserId'})

export { User, Gym, Routine, Day, Exercise, WarmUp, IdRegistro, Meals, ExtraTraining, Loads, Shift, Payments }
export const conn = sequelize