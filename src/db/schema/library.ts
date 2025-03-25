import { pgTable, text, timestamp, doublePrecision } from "drizzle-orm/pg-core";
import { usersTable } from "./users";
import { sql } from "drizzle-orm";

export const libraryTable = pgTable("library", {
    id: text("id").primaryKey().default(sql`uuid_generate_v4()`),
    userId: text("userId").notNull().references(() => usersTable.id),
    type: text("type").notNull(),
    image: text("image").notNull(),
    title: text("title").notNull(),
    describtion: text("describtion").notNull(),
    category: text("category").notNull(),
    visibility: text("visbility").notNull(),
    instruction: text("instruction"),
    // gptId: text("gptId").notNull().references(() => modelGptTable.id),
    modelAI:text("modelAI"),
    modelAIAccurarcy: doublePrecision("modelAIAccurarcy"),
    youtbeChannel:text("youtube"),
    youtubeChannelLink:text("youtubeChannelLink"),
    youtubeVideoLink:text("youtubeVideoLink"),
    websiteURl:text("websiteURl"),
    webpageLink:text("webpageLink"),
    document:text("document"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
