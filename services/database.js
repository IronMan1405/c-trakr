import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cTrakrdb.db');

export const initDb = async () => {
	db.transaction(tx => {
		tx.executeSql(`
			CREATE TABLE IF NOT EXISTS cars (
				id TEXT PRIMARY KEY NOT NULL,
				name TEXT NOT NULL,
				car_type TEXT NOT NULL,
				fuel_type TEXT NOT NULL,
				created_at TEXT NOT NULL
			);`,
			[],
			() => {
				console.log("database initialized");
			}, 
			(_, err) => {
				console.error("database initialize failed: ", err);
			}
		);
		tx.executeSql(`
			CREATE TABLE IF NOT EXISTS trips (
				id TEXT PRIMARY KEY NOT NULL,
				car_id TEXT NOT NULL,
				distance REAL NOT NULL,
				fuel_used REAL NOT NULL,
				carbon_emitted REAL NOT NULL,
				avg_speed REAL,
				created_at TEXT NOT NULL
			);`,
			[],
			() => {
			console.log("Trips table initialized");
			},
			(_, err) => {
			console.log("Trips table error:", err);
			return false;
			}
			);
			
	});
};

export default db;