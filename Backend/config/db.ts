import dotenv from "dotenv";
dotenv.config();
import mysql, { type Pool } from "mysql2";

const pool: Pool = mysql.createPool({
  host: process.env.HOST as string,
  user: process.env.USER as string,
  password: process.env.PASSWORD as string,
  database: process.env.DATABASE as string,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
