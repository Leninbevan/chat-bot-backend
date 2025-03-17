"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificationTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.verificationTable = (0, pg_core_1.pgTable)("verification", {
    id: (0, pg_core_1.text)("id").primaryKey().default("uuid_generate_v4()"),
    identifier: (0, pg_core_1.text)("identifier").notNull(),
    value: (0, pg_core_1.text)("value").notNull(),
    expiresAt: (0, pg_core_1.timestamp)("expiresAt").notNull(),
    createdAt: (0, pg_core_1.timestamp)("createdAt").defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updatedAt").defaultNow(),
});
