const server = require('./src/routes')
require('dotenv').config()
const { PORT } = process.env
import { conn } from "./src/db";

conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => console.log(`Running in port ${PORT}`))
})