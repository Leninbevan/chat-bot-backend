"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const users_1 = require("./users");
const drizzle_orm_1 = require("drizzle-orm");
exports.accountsTable = (0, pg_core_1.pgTable)("account", {
    id: (0, pg_core_1.text)("id").primaryKey().default((0, drizzle_orm_1.sql) `uuid_generate_v4()`),
    accountId: (0, pg_core_1.text)("accountId").notNull(),
    providerId: (0, pg_core_1.text)("providerId").notNull(),
    userId: (0, pg_core_1.text)("userId").notNull().references(() => users_1.usersTable.id),
    accessToken: (0, pg_core_1.text)("accessToken"),
    refreshToken: (0, pg_core_1.text)("refreshToken"),
    idToken: (0, pg_core_1.text)("idToken"),
    accessTokenExpiresAt: (0, pg_core_1.timestamp)("accessTokenExpiresAt"),
    refreshTokenExpiresAt: (0, pg_core_1.timestamp)("refreshTokenExpiresAt"),
    scope: (0, pg_core_1.text)("scope"),
    password: (0, pg_core_1.text)("password"),
    createdAt: (0, pg_core_1.timestamp)("createdAt").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updatedAt").defaultNow().notNull(),
});
