import "dotenv/config";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import express from "express";
import { usersTable } from "./db/schema";
const app = express();
const port = process.env.SERVER_HOST || 3000;

const db = drizzle(process.env.DB_URL!);

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const users = await db.select().from(usersTable);
  console.log("Getting all users from the database: ", users);

  res.send(users);
});

app.post("/users", async (req, res) => {
  const newUser: typeof usersTable.$inferInsert = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  const response = await db.insert(usersTable).values(newUser);
  console.log("New user created!");

  res.send(response);
});

app.put("/users/:id", async (req, res) => {
  const userId = req.params.id;

  const newUser = await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.id, Number(userId)));
  console.log("User info updated!");

  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
