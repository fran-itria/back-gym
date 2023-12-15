import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'Comidas',
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
            time: {
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