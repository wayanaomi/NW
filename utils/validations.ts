import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "That name looks too long."),
  email: z
    .string()
    .trim()
    .min(1, "Your email address is required.")
    .email("Please enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Give your message a short subject.")
    .max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(20, "Please share a few more details (min. 20 characters).")
    .max(2000, "That message is too long."),
  company: z.string().max(0).optional(), // honeypot field, must stay empty
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
