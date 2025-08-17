import { UserController } from "#modules/users/controllers.js";
import { Router } from "express";

const router = Router();

router.get("/users", UserController.getUsers);

router.get("/users/:id", UserController.getUserById);

router.post("/users", UserController.createUser);

router.put("/users/:id", UserController.updateUser);

router.delete("/users/:id", UserController.deleteUserById);

export default router;
