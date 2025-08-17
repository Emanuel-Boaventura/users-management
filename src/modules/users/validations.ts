import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string("Nome inválido").min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.email("Email inválido"),
  age: z.number("Idade inválida").min(0, "Idade deve ser um número positivo"),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;

export const updateUserSchema = createUserSchema.partial();

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
