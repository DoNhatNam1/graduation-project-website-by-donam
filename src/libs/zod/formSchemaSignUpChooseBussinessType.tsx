"use client";
import { z } from "zod";

export const formSchemaSignUpChooseBussinessType = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long!"),
  area: z.string().min(3, "Area must be at least 3 characters long!"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long!"),
  businessName: z.string().min(3, "Business Name must be at least 3 characters long!"),
  urlHost: z.string().min(3, "Url host must be at least 3 characters long!"),
  phone_number: z
    .number()
    .min(10, "Phone number must be at least 11 characters!"),
});