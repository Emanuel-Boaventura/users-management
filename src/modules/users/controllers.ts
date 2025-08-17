import { UserServices } from "#modules/users/services.js";
import { createUserSchema, updateUserSchema } from "#modules/users/validations.js";
import { Request, Response } from "express";

async function getUsers(req: Request, res: Response) {
  const users = await UserServices.findAll();

  res.send(users);
}

async function getUserById(req: Request, res: Response) {
  const userId = Number(req.params.id);
  const users = await UserServices.findById(userId);

  if (users.length === 0) {
    return res.status(404).send("User not found");
  }

  res.send(users[0]);
}

async function createUser(req: Request, res: Response) {
  const result = createUserSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).send(JSON.parse(result.error.message));
  }

  const createdUser = await UserServices.createUser(result.data);

  res.send(createdUser[0]);
}

async function updateUser(req: Request, res: Response) {
  const userId = Number(req.params.id);

  const result = updateUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).send(result.error);
  }

  const updatedUser = await UserServices.updateUser(userId, result.data);

  res.send(updatedUser[0]);
}

async function deleteUserById(req: Request, res: Response) {
  const userId = Number(req.params.id);

  const deletedUser = await UserServices.deleteById(userId);

  res.send(deletedUser[0]);
}

export const UserController = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
};
