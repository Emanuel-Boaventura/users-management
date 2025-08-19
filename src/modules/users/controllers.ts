import { UserServices } from "#modules/users/services.js";
import { createUserSchema, updateUserSchema } from "#modules/users/validations.js";
import { Request, Response } from "express";

async function getUsers(req: Request, res: Response) {
  try {
    const users = await UserServices.findAll();

    res.send(users);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function getUserById(req: Request, res: Response) {
  try {
    const users = await UserServices.findById(req.params.id);

    if (users.length === 0) {
      return res.status(404).send("User not found");
    }

    res.send(users[0]);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function createUser(req: Request, res: Response) {
  try {
    const result = createUserSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).send(JSON.parse(result.error.message));
    }

    const createdUser = await UserServices.createUser(result.data);

    res.send(createdUser[0]);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function updateUser(req: Request, res: Response) {
  try {
    const result = updateUserSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).send(result.error);
    }

    const updatedUser = await UserServices.updateUser(req.params.id, result.data);

    res.send(updatedUser[0]);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function deleteUserById(req: Request, res: Response) {
  try {
    const deletedUser = await UserServices.deleteById(req.params.id);

    res.send(deletedUser[0]);
  } catch (error) {
    res.status(500).send({ error });
  }
}

export const UserController = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
};
