"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server = require('./src/routes');
require('dotenv').config();
const { PORT } = process.env;
const db_1 = require("./src/db");
db_1.conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => console.log(`Running in port ${PORT}`));
});
//# sourceMappingURL=index.js.map