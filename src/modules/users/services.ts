import { usersTable } from "#db/schema.js";
import { db } from "#index.js";
import { CreateUserSchema, UpdateUserSchema } from "#modules/users/validations.js";
import { eq } from "drizzle-orm";

async function findAll() {
  return db.select().from(usersTable);
}

async function findById(id: string) {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}

async function createUser(data: CreateUserSchema) {
  return db.insert(usersTable).values(data).returning();
}

async function updateUser(id: string, data: UpdateUserSchema) {
  return db.update(usersTable).set(data).where(eq(usersTable.id, id)).returning();
}

async function deleteById(id: string) {
  return db.delete(usersTable).where(eq(usersTable.id, id)).returning();
}

export const UserServices = {
  findAll,
  findById,
  createUser,
  updateUser,
  deleteById,
};
