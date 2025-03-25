"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const users_1 = require("./users");
const drizzle_orm_1 = require("drizzle-orm");
exports.libraryTable = (0, pg_core_1.pgTable)("library", {
    id: (0, pg_core_1.text)("id").primaryKey().default((0, drizzle_orm_1.sql) `uuid_generate_v4()`),
    userId: (0, pg_core_1.text)("userId").notNull().references(() => users_1.usersTable.id),
    type: (0, pg_core_1.text)("type").notNull(),
    image: (0, pg_core_1.text)("image").notNull(),
    title: (0, pg_core_1.text)("title").notNull(),
    describtion: (0, pg_core_1.text)("describtion").notNull(),
    category: (0, pg_core_1.text)("category").notNull(),
    visibility: (0, pg_core_1.text)("visbility").notNull(),
    instruction: (0, pg_core_1.text)("instruction"),
    // gptId: text("gptId").notNull().references(() => modelGptTable.id),
    modelAI: (0, pg_core_1.text)("modelAI"),
    modelAIAccurarcy: (0, pg_core_1.doublePrecision)("modelAIAccurarcy"),
    youtbeChannel: (0, pg_core_1.text)("youtube"),
    youtubeChannelLink: (0, pg_core_1.text)("youtubeChannelLink"),
    youtubeVideoLink: (0, pg_core_1.text)("youtubeVideoLink"),
    websiteURl: (0, pg_core_1.text)("websiteURl"),
    webpageLink: (0, pg_core_1.text)("webpageLink"),
    document: (0, pg_core_1.text)("document"),
    createdAt: (0, pg_core_1.timestamp)("createdAt").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updatedAt").defaultNow().notNull(),
});
