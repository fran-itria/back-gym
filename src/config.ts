require("dotenv").config();
export const { PORT, PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
if (!PORT) {
  throw new Error("PORT is not defined");
}
if (!PGHOST) {
  throw new Error("PGHOST is not defined");
}
if (!PGDATABASE) {
  throw new Error("PGDATABASE is not defined");
}
if (!PGUSER) {
  throw new Error("PGUSER is not defined");
}
if (!PGPASSWORD) {
  throw new Error("PGPASSWORD is not defined");
}
