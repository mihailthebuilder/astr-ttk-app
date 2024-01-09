import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "pg",
  verbose: true,
  strict: true,
});
