import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import { hashtag, hashtagTrend } from "./schema";

const queryClient = postgres(import.meta.env.DB_URL || "");
export const db = drizzle(queryClient);

export function getAllHashtags() {
  return db
    .select()
    .from(hashtag)
    .innerJoin(hashtagTrend, eq(hashtag.id, hashtagTrend.id));
}
