import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone is required"),
  email: z.string().email("Valid email is required"),
  location: z.string().min(2, "Location is required"),
  message: z.string().min(10, "Message is too short"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
