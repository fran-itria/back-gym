import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'Day',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            numberDay: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    )
}