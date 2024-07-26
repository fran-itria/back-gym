require("dotenv").config();
export const { PORT, PGHOST, PGDATABASE, PGUSER, PGPASSWORD, USER_APLICATION, PASSWORD_APLICATION } = process.env;
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
if (!USER_APLICATION) {
  throw new Error("USER_APLICATION is not defined");
}
if (!PASSWORD_APLICATION) {
  throw new Error("PASSWORD_APLICATION is not defined");
}
