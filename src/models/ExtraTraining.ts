import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'ExtraTraining',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4()
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            hour: {
                type: DataTypes.TIME,
                allowNull: false
            },
            exercise: {
                type: DataTypes.STRING,
                allowNull: false
            },
            duration: {
                type: DataTypes.STRING,
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