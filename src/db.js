import { createPool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js";

export const Pool = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME
/*   user: "root",
  password: "",
  host: "localhost",
  port: "3306",
  database: "instituto" */
})
