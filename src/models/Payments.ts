import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize){
    sequelize.define(
        'Payments',
        {
            id: {
                type: DataTypes.UUID(),
                defaultValue: DataTypes.UUIDV4(),
                primaryKey: true
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: true
            },
            hour: {
                type: DataTypes.TIME,
                allowNull: false
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    )
}