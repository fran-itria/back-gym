const server = require('./src/routes')
require('dotenv').config()
const { PORT } = process.env
import { conn } from "./src/db";

conn.sync({ alter: true }).then(() => {
    server.listen(PORT, () => console.log(`Running in port ${PORT}`))
})