import { drizzle } from "drizzle-orm/postgres-js";
import { eq, and } from "drizzle-orm";
import postgres from "postgres";
import { hashtag } from "./schema";
import type { Hashtag } from "../lib/types";

const queryClient = postgres(import.meta.env.DB_URL || "");
export const db = drizzle(queryClient);

export async function getAllHashtags(countryCode: string): Promise<Hashtag[]> {
  const rows = await db
    .select()
    .from(hashtag)
    .where(
      and(
        eq(hashtag.latestTrending, true),
        eq(hashtag.countryCode, countryCode)
      )
    )
    .orderBy(hashtag.rank);

  rows.forEach((row) => {
    row.trend = row.trend.map((point) => ({
      time: point.time,
      value: point.value * 100,
    }));
  });

  return rows;
}
