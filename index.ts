const server = require("./src/routes");

import { PORT } from "./src/config";
import { conn } from "./src/db";

conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => console.log(`Running in port ${PORT}`));
});
