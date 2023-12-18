import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'Meals',
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
            moment: {
                type: DataTypes.ENUM('Desayuno', 'Media mañana', 'Almuerzo', 'Merienda', 'Cena'),
                allowNull: false
            },
            food: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    )
}