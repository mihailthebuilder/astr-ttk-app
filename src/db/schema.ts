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
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    countryCode: text("country_code").notNull(),
    posts: integer("posts").notNull(),
    rank: integer("rank").notNull(),
    latestTrending: boolean("latest_trending").notNull(),
    views: integer("views").notNull(),
    isPromoted: boolean("is_promoted").notNull(),
    trendingType: integer("trending_type").notNull(),
    createdAt: timestamp("created_at").notNull(),
  },
  (table) => {
    return {
      countryCodeIdx: index("hashtag_country_code_idx").on(table.countryCode),
    };
  }
);

export const hashtagTrend = pgTable(
  "hashtag_trend",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    hashtagId: uuid("hashtag_id")
      .references(() => hashtag.id)
      .notNull(),
    recordedForUnixTime: integer("recorded_for_unix_time").notNull(),
    interest: integer("interest").notNull(),
  },
  (table) => {
    return {
      hashtagT: index("hashtag_trend_hashtag_id_idx").on(table.hashtagId),
    };
  }
);
