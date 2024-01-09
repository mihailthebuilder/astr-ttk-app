import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./db/migrations",
  driver: "pg",
  verbose: true,
  strict: true,
});
