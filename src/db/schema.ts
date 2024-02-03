import {
  text,
  timestamp,
  pgTable,
  uuid,
  integer,
  boolean,
  index,
  jsonb,
} from "drizzle-orm/pg-core";
import type { PointInHashtagTrend } from "../lib/types";

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
    createdAt: timestamp("created_at").notNull().defaultNow(),
    trend: jsonb("trend").$type<PointInHashtagTrend[]>().notNull(),
  },
  (table) => {
    return {
      countryCodeIdx: index("hashtag_country_code_idx").on(table.countryCode),
    };
  }
);
