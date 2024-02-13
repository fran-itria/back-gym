import { DataTypes, Sequelize } from "sequelize";

export default function (sequelize: Sequelize) {
    sequelize.define(
        'User',
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
            surname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            dni: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            user: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            phone: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            contactEmergency: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            pay: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            ban: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            login: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
            linkMp: {
                type: DataTypes.STRING,
                allowNull: true
            },
            photo: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            timestamps: false
        }
    )
}