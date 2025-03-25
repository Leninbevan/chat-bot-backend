import { usersTable } from '../../../db/schema/users';
import { accountsTable } from '../../../db/schema/account';
import { sessionsTable } from '../../../db/schema/session';
import { verificationTable } from '../../../db/schema/verification';
import { libraryTable } from "../../../db/schema/library"
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import db from '../../../db/index';
import { Library } from '../../../types/libraryType';

const sql = drizzle(db.$client, { schema: { usersTable, accountsTable, sessionsTable, verificationTable } });

export const getUser = async (id: string) => {
    const user = await sql.select().from(usersTable).where(eq(usersTable.id, id)).execute();
    return user;
}

export const getAllUser = async () => {
    const users = await sql.select().from(usersTable).execute();
    return users;
}

export const getSpaces = async () => {
    const spaces = await sql.select().from(libraryTable).where(eq(libraryTable.type, "spaces")).execute();
    return spaces;
}

export const getAgents = async () => {
    const spaces = await sql.select().from(libraryTable).where(eq(libraryTable.type, "agents")).execute();
    return spaces;
}

export const getCharacters = async () => {
    const spaces = await sql.select().from(libraryTable).where(eq(libraryTable.type, "characters")).execute();
    return spaces;
}

export const updateLibrary = async (id: string, data: Partial<typeof libraryTable.$inferInsert>) => {
    await sql.update(libraryTable).set(data).where(eq(libraryTable.id, id)).execute();
    return;
};

export const addLibrary = async (data: Library) => {
    await sql.insert(libraryTable).values(data).execute();
    return;
}