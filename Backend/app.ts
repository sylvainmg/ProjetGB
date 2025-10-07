import pool from "./config/db.ts";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (_, res) => {
  try {
    const [rows] = await pool.promise().query("SELECT * FROM CLIENT");
    res.json(rows);
  } catch (e) {
    console.error(e);
  }
});

app.listen(3000, () => {
  console.log("Server listening on PORT 3000...");
});
