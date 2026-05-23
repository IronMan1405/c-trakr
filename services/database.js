import * as SQLite from 'expo-sqlite';

let db = null;

export const getDb = async () => {
	if (db) {
		return db;
	}
    const db = await SQLite.openDatabaseAsync('cTrakrDb');
	return db;
};

export const initDb = async () => {
	try {
		const database = await getDb();

		await database.execAsync(`
			CREATE TABLE IF NOT EXISTS cars (
			id TEXT PRIMARY KEY NOT NULL,
			name TEXT NOT NULL,
			car_type TEXT NOT NULL,
			fuel_type TEXT NOT NULL,
			created_at TEXT NOT NULL
			);
		`);

		console.log("database initialized");
	} catch (err) {
		console.error("database initialize failed: ", err);
	}
};