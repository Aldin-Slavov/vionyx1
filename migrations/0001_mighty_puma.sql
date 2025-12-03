ALTER TABLE "services" DROP CONSTRAINT "services_slug_unique";--> statement-breakpoint
ALTER TABLE "clients" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "services" ALTER COLUMN "title_en" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "services" ALTER COLUMN "description_en" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "services" ALTER COLUMN "features" SET DATA TYPE json;--> statement-breakpoint
ALTER TABLE "services" ALTER COLUMN "features_en" SET DATA TYPE json;--> statement-breakpoint
ALTER TABLE "services" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "name_en" text;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "testimonial_en" text;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "contact_person_en" text;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "position_en" text;--> statement-breakpoint
ALTER TABLE "services" ADD COLUMN "price_unit_en" text;
-- Ако старият тип е text и съдържанието вече е валиден JSON низ
ALTER TABLE services
ALTER COLUMN features TYPE json USING features::json;

-- Ако старият тип е text и съдържанието НЕ е валиден JSON (напр. просто текст),
-- може да искате да го превърнете в JSON обект или масив:
-- ALTER TABLE services
-- ALTER COLUMN features TYPE json USING to_json(features);
-- Или, ако искате празен текст да стане NULL:
-- ALTER COLUMN features TYPE json USING (CASE WHEN features = '' THEN NULL ELSE features::json END);

-- Направете същото и за features_en, ако е нужно
ALTER TABLE services
ALTER COLUMN features_en TYPE json USING features_en::json;