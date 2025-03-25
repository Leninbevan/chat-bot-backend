"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLibrary = exports.updateLibrary = exports.getCharacters = exports.getAgents = exports.getSpaces = exports.getAllUser = exports.getUser = void 0;
const users_1 = require("../../../db/schema/users");
const account_1 = require("../../../db/schema/account");
const session_1 = require("../../../db/schema/session");
const verification_1 = require("../../../db/schema/verification");
const library_1 = require("../../../db/schema/library");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const drizzle_orm_1 = require("drizzle-orm");
const index_1 = __importDefault(require("../../../db/index"));
const sql = (0, node_postgres_1.drizzle)(index_1.default.$client, { schema: { usersTable: users_1.usersTable, accountsTable: account_1.accountsTable, sessionsTable: session_1.sessionsTable, verificationTable: verification_1.verificationTable } });
const getUser = async (id) => {
    const user = await sql.select().from(users_1.usersTable).where((0, drizzle_orm_1.eq)(users_1.usersTable.id, id)).execute();
    return user;
};
exports.getUser = getUser;
const getAllUser = async () => {
    const users = await sql.select().from(users_1.usersTable).execute();
    return users;
};
exports.getAllUser = getAllUser;
const getSpaces = async () => {
    const spaces = await sql.select().from(library_1.libraryTable).where((0, drizzle_orm_1.eq)(library_1.libraryTable.type, "spaces")).execute();
    return spaces;
};
exports.getSpaces = getSpaces;
const getAgents = async () => {
    const spaces = await sql.select().from(library_1.libraryTable).where((0, drizzle_orm_1.eq)(library_1.libraryTable.type, "agents")).execute();
    return spaces;
};
exports.getAgents = getAgents;
const getCharacters = async () => {
    const spaces = await sql.select().from(library_1.libraryTable).where((0, drizzle_orm_1.eq)(library_1.libraryTable.type, "characters")).execute();
    return spaces;
};
exports.getCharacters = getCharacters;
const updateLibrary = async (id, data) => {
    await sql.update(library_1.libraryTable).set(data).where((0, drizzle_orm_1.eq)(library_1.libraryTable.id, id)).execute();
    return;
};
exports.updateLibrary = updateLibrary;
const addLibrary = async (data) => {
    await sql.insert(library_1.libraryTable).values(data).execute();
    return;
};
exports.addLibrary = addLibrary;
