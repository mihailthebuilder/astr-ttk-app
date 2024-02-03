import { drizzle } from "drizzle-orm/postgres-js";
import { eq, and } from "drizzle-orm";
import postgres from "postgres";
import { hashtag } from "./schema";
import type { Hashtag } from "../lib/types";

const queryClient = postgres(import.meta.env.DB_URL || "");
export const db = drizzle(queryClient);

export async function getHashtagsForCountry(
  countryCode: string
): Promise<Hashtag[]> {
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

  processRows(rows);

  return rows;
}

export async function getAllHashtags(): Promise<Hashtag[]> {
  const rows = await db
    .select()
    .from(hashtag)
    .where(and(eq(hashtag.latestTrending, true)));

  shuffleArray(rows);
  const rowsToProcess = rows.slice(0, 10);

  processRows(rowsToProcess);

  return rowsToProcess;
}

function processRows(rows: Hashtag[]) {
  rows.forEach((row) => {
    row.trend = row.trend.map((point) => ({
      time: point.time,
      value: point.value * 100,
    }));
  });
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
