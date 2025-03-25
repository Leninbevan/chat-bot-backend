"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const users_1 = require("./users");
const drizzle_orm_1 = require("drizzle-orm");
exports.sessionsTable = (0, pg_core_1.pgTable)("session", {
    id: (0, pg_core_1.text)("id").primaryKey().default((0, drizzle_orm_1.sql) `uuid_generate_v4()`),
    expiresAt: (0, pg_core_1.timestamp)("expiresAt").notNull(),
    token: (0, pg_core_1.text)("token").notNull().unique(),
    createdAt: (0, pg_core_1.timestamp)("createdAt").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updatedAt").defaultNow().notNull(),
    ipAddress: (0, pg_core_1.text)("ipAddress"),
    userAgent: (0, pg_core_1.text)("userAgent"),
    userId: (0, pg_core_1.text)("userId").notNull().references(() => users_1.usersTable.id),
});
