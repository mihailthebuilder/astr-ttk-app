import {
  text,
  timestamp,
  pgTable,
  uuid,
  integer,
  boolean,
  index,
} from "drizzle-orm/pg-core";

export const hashtag = pgTable(
  "hashtag",
  {
    id: uuid("id").defaultRandom().primaryKey().unique(),
    name: text("name"),
    countryCode: text("country_code"),
    posts: integer("posts"),
    rank: integer("rank"),
    latestTrending: boolean("latest_trending"),
    views: integer("views"),
    isPromoted: boolean("is_promoted"),
    trendingType: integer("trending_type"),
    createdAt: timestamp("created_at"),
  },
  (table) => {
    return {
      countryCodeIdx: index("hashtag_country_code_idx").on(table.countryCode),
    };
  }
);

export const hasthagTrend = pgTable(
  "hashtag_trend",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    hashtagId: uuid("hashtag_id").references(() => hashtag.id),
    recordedForUnixTime: integer("recorded_for_unix_time"),
    interest: integer("interest"),
  },
  (table) => {
    return {
      hashtagT: index("hashtag_trend_hashtag_id_idx").on(table.hashtagId),
    };
  }
);
