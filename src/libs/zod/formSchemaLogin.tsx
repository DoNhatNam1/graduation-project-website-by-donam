'use client'

import { z } from "zod";

export const formSchemaLogin = z.object({
  phone_number: z.number().min(1, "Username require!"),
  password: z.string().min(1, "Password require!"),
});