import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'IdRegistro',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4(),
                primaryKey: true
            },
            gym: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            timestamps: false
        }
    )
}