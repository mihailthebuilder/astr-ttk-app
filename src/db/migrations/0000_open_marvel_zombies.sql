CREATE TABLE IF NOT EXISTS "hashtag" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"country_code" text,
	"posts" integer,
	"rank" integer,
	"latest_trending" boolean,
	"views" integer,
	"is_promoted" boolean,
	"trending_type" integer,
	"created_at" timestamp,
	CONSTRAINT "hashtag_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hashtag_trend" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hashtag_id" uuid,
	"recorded_for_unix_time" integer,
	"interest" integer
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "hashtag_country_code_idx" ON "hashtag" ("country_code");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "hashtag_trend_hashtag_id_idx" ON "hashtag_trend" ("hashtag_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hashtag_trend" ADD CONSTRAINT "hashtag_trend_hashtag_id_hashtag_id_fk" FOREIGN KEY ("hashtag_id") REFERENCES "public"."hashtag"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
