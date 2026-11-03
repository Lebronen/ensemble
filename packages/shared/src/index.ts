import { z } from "zod";

/** Règles de validation partagées entre les formulaires et le serveur. */
export const profileSchema = z.object({
  displayName: z.string().trim().min(2).max(60),
  kind: z.enum(["musician", "band", "venue"]),
  instruments: z.array(z.string().trim().min(1)).max(20),
  genres: z.array(z.string().trim().min(1)).max(20),
  city: z.string().trim().min(1).max(100),
  bio: z.string().trim().max(2000).default(""),
});

export type Profile = z.infer<typeof profileSchema>;
