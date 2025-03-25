"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersTable = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
exports.usersTable = (0, pg_core_1.pgTable)("user", {
    id: (0, pg_core_1.text)("id").primaryKey().default((0, drizzle_orm_1.sql) `uuid_generate_v4()`),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    email: (0, pg_core_1.varchar)("email", { length: 255 }).notNull().unique(),
    emailVerified: (0, pg_core_1.boolean)("emailVerified").notNull(),
    image: (0, pg_core_1.text)("image").notNull(),
    createdAt: (0, pg_core_1.timestamp)("createdAt").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updatedAt").defaultNow().notNull(),
});
