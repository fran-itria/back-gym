import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'Routine',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            weeks: {
                type: DataTypes.INTEGER,
                defaultValue: 1
            }
        },
        {
            timestamps: false
        }
    )
}