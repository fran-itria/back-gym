import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'Ejercicio',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            series: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            repeticiones: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cargas: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true
            }
        },
        {
            timestamps: false
        }
    )
}