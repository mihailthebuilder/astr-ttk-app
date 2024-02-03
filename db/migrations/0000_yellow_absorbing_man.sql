CREATE TABLE IF NOT EXISTS "hashtag" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"country_code" text NOT NULL,
	"posts" integer NOT NULL,
	"rank" integer NOT NULL,
	"latest_trending" boolean NOT NULL,
	"views" integer NOT NULL,
	"is_promoted" boolean NOT NULL,
	"trending_type" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"trend" jsonb NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "hashtag_country_code_idx" ON "hashtag" ("country_code");