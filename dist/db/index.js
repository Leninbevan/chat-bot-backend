"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_postgres_1 = require("drizzle-orm/node-postgres");
// We can specify any property from the node-postgres connection options
const db = (0, node_postgres_1.drizzle)({
    connection: {
        connectionString: process.env.DATABASE_URL
    }
});
exports.default = db;
