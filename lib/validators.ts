import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone is required").optional().or(z.literal("")),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  location: z.string().min(2, "Location is required"),
  cropName: z.string().optional(),
  message: z.string().min(10, "Message is too short").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
