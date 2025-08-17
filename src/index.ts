import router from "#modules/users/routes.js";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import express from "express";

export const app = express();
const port = process.env.SERVER_HOST ?? "3333";
export const db = drizzle(process.env.DB_URL ?? "");

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
