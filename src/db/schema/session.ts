import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "./users";
import { sql } from "drizzle-orm";

export const sessionsTable = pgTable("session", {
    id: text("id").primaryKey().default(sql`uuid_generate_v4()`),
    expiresAt: timestamp("expiresAt").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    ipAddress: text("ipAddress"),
    userAgent: text("userAgent"),
    userId: text("userId").notNull().references(() => usersTable.id),
  });
  