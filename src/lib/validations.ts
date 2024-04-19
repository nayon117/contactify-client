import { z } from "zod";

export const formSchema = z.object({
    name:z.string().min(5).max(50),
    email:z.string().email(),
    phone: z.string().regex(/^\d{10,14}$/),
    address:z.string().min(3).max(50),
    picture:z.string().url(),
  });