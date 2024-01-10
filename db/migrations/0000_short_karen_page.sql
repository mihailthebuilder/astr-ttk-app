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
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hashtag_trend" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hashtag_id" uuid NOT NULL,
	"recorded_for_unix_time" integer NOT NULL,
	"interest" integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "hashtag_country_code_idx" ON "hashtag" ("country_code");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "hashtag_trend_hashtag_id_idx" ON "hashtag_trend" ("hashtag_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hashtag_trend" ADD CONSTRAINT "hashtag_trend_hashtag_id_hashtag_id_fk" FOREIGN KEY ("hashtag_id") REFERENCES "public"."hashtag"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
