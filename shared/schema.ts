// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Първо дефинираме таблиците
export const services = pgTable("services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  titleEn: text("title_en"), // Може да е NULL в DB
  slug: text("slug").notNull(),
  description: text("description").notNull(),
  descriptionEn: text("description_en"), // Може да е NULL в DB
  image: text("image").notNull(),
  icon: text("icon").notNull(),
  priceFrom: integer("price_from").notNull(),
  priceUnit: text("price_unit").notNull(),
  priceUnitEn: text("price_unit_en"), // Може да е NULL в DB
  fullDescription: text("full_description"), // Може да е NULL в DB
  features: json("features"), // за масиви, може да е NULL
  featuresEn: json("features_en"), // за масиви, може да е NULL
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const clients = pgTable("clients", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  nameEn: text("name_en"), // Може да е NULL в DB
  logo: text("logo"), // Може да е NULL в DB
  testimonial: text("testimonial"), // Може да е NULL в DB
  testimonialEn: text("testimonial_en"), // Може да е NULL в DB
  contactPerson: text("contact_person"), // Може да е NULL в DB
  contactPersonEn: text("contact_person_en"), // Може да е NULL в DB
  position: text("position"), // Може да е NULL в DB
  positionEn: text("position_en"), // Може да е NULL в DB
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// След като са дефинирани таблиците, създаваме схемите
export const insertServiceSchema = createInsertSchema(services).omit({
  id: true,
  createdAt: true,
});

export const insertClientSchema = createInsertSchema(clients).omit({
  id: true,
  createdAt: true,
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Типове
// Типове за Insert (входящи данни, напр. от форми)
export type InsertService = z.infer<typeof insertServiceSchema>;
export type InsertClient = z.infer<typeof insertClientSchema>;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;

// Типове за Select (изходящи данни, напр. от базата)
// Използваме $inferSelect от Drizzle, за да са максимално точни
export type Service = typeof services.$inferSelect;
export type Client = typeof clients.$inferSelect;
export type ContactRequest = typeof contactRequests.$inferSelect;
export type User = typeof users.$inferSelect;