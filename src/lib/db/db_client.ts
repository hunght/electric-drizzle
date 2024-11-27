import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { join } from 'path';
import { app } from 'electron';
import * as schema from './schemas/clients';

let db: ReturnType<typeof drizzle>;

try {
    const dbPath = join(app.getPath('userData'), 'sqlite.db');
    const sqlite = new Database(dbPath);

    sqlite.exec(`
        CREATE TABLE IF NOT EXISTS clients (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL
        );
    `);

    db = drizzle(sqlite, { schema: { clients: schema.clients } });
} catch (error) {
    console.error('Failed to initialize database:', error);
    throw error;
}

export { db };