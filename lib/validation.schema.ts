import { z } from "zod";

export const validationSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().includes("supabase.co"),

  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).startsWith("eyJ"),

  NEXT_PUBLIC_BASE_URL: z.string().url(),

  NEXT_PUBLIC_BACKEND_URL: z.string().url(),

  NEXT_PUBLIC_APP_STORE_URL: z.string().url().includes("apps.apple.com"),

  NEXT_PUBLIC_PLAY_STORE_URL: z.string().url().includes("play.google.com"),
});

export type EnvConfig = z.infer<typeof validationSchema>;

export const validateEnv = (
  env: Record<string, string | undefined>
): EnvConfig => {
  try {
    return validationSchema.parse(env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(
        (err) => `${err.path.join(".")}: ${err.message}`
      );
      throw new Error(
        `Environment validation failed:\n${errorMessages.join("\n")}`
      );
    }
    throw error;
  }
};
