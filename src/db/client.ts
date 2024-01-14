import { drizzle } from "drizzle-orm/postgres-js";
import { eq, and } from "drizzle-orm";
import postgres from "postgres";
import { hashtag, hashtagTrend } from "./schema";
import type { Hashtag } from "../lib/types";

const queryClient = postgres(import.meta.env.DB_URL || "");
export const db = drizzle(queryClient);

type HashtagRow = typeof hashtag.$inferSelect;
type HashtagTrendRow = typeof hashtagTrend.$inferSelect;

type ProcessedHashtagRow = HashtagRow & { hashtagTrend: HashtagTrendRow[] };

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
    .innerJoin(hashtagTrend, eq(hashtag.id, hashtagTrend.hashtagId))
    .orderBy(hashtag.rank, hashtagTrend.recordedForUnixTime);

  const reduced = rows.reduce<Record<string, ProcessedHashtagRow>>(
    (acc, row) => {
      const hashtagRow = row.hashtag;
      const hashtagTrendRow = row.hashtag_trend;

      if (!acc[hashtagRow.id]) {
        acc[hashtagRow.id] = { ...hashtagRow, hashtagTrend: [] };
      }

      acc[hashtagRow.id].hashtagTrend.push(hashtagTrendRow);
      return acc;
    },
    {}
  );

  const combinedRows = Object.entries(reduced).map((x) => x[1]);

  return combinedRows;
}
