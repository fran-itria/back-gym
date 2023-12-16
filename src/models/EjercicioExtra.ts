import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'EjercicioExtra',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4()
            },
            fecha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            hora: {
                type: DataTypes.TIME,
                allowNull: false
            },
            ejercicio: {
                type: DataTypes.STRING,
                allowNull: false
            },
            duration: {
                type: DataTypes.TIME,
                allowNull: true
            },
            distance: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            timestamps: false
        }
    )
}