import { DataTypes, Sequelize, UUIDV4 } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'Gym',
        {
            id: {
                type: DataTypes.UUID(),
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4()
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            }
        }
    )
} 