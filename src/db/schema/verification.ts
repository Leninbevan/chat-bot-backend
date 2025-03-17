import {  pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const verificationTable = pgTable("verification", {
    id: text("id").primaryKey().default("uuid_generate_v4()"),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expiresAt").notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow(),
  });
  