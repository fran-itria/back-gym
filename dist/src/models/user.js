"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    sequelize.define('User', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}
exports.default = default_1;
//# sourceMappingURL=User.js.map