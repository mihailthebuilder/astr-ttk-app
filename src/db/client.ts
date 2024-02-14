import { drizzle } from "drizzle-orm/postgres-js";
import { eq, and } from "drizzle-orm";
import postgres from "postgres";
import { hashtag } from "./schema";
import type { Hashtag, PointInHashtagTrend } from "../lib/types";

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

  const hashtags = processRows(rows);

  return hashtags;
}

export async function getAllHashtags(): Promise<Hashtag[]> {
  const rows = await db
    .select()
    .from(hashtag)
    .where(and(eq(hashtag.latestTrending, true)));

  shuffleArray(rows);

  const hashtags = processRows(rows.slice(0, 20));

  return hashtags;
}

function processRows(rows: HashtagTableRow[]): Hashtag[] {
  return rows.map((row) => {
    return {
      id: row.id,
      name: row.name,
      countryCode: row.countryCode,
      posts: row.posts,
      rank: row.rank,
      latestTrending: row.latestTrending,
      isPromoted: row.isPromoted,
      trendingType: row.trendingType,
      createdAt: row.createdAt,
      views: BigInt(row.views as bigint),
      trend: row.trend.map((point) => ({
        time: point.time,
        value: point.value * 100,
      })),
    };
  });
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

type HashtagTableRow = {
  id: string;
  name: string;
  countryCode: string;
  posts: number;
  rank: number;
  latestTrending: boolean;
  views: unknown;
  isPromoted: boolean;
  trendingType: number;
  createdAt: Date;
  trend: PointInHashtagTrend[];
};
