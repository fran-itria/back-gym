import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'Loads',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4()
            },
            loads: {
                type: DataTypes.STRING,
                allowNull: true
            },
            week: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    )
}