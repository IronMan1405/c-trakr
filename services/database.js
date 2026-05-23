import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cTrakrdb.db');

// export const getDb = async () => {
// 	if (db) {
// 		return db;
// 	}
//     const db = await SQLite.openDatabaseAsync('cTrakrDb');
// 	return db;
// };

export const initDb = async () => {
	db.transaction(tx => {
		tx.executeSql(`
			CREATE TABLE IF NOT EXISTS cars (
				id TEXT PRIMARY KEY NOT NULL,
				name TEXT NOT NULL,
				car_type TEXT NOT NULL,
				fuel_type TEXT NOT NULL,
				created_at TEXT NOT NULL
			);
			`,
			[],
			() => {
				console.log("database initialized");
			}, 
			(_, err) => {
				console.error("database initialize failed: ", err);
			}
		);
	});
};

export default db;