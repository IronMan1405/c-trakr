// carService.js

import db from "./database";

export const CarService = {
	getCars() {
		return new Promise((resolve, reject) => {
			db.transaction(tx => {
				tx.executeSql(`
					SELECT * FROM cars
					ORDER BY created_at DESC;
					`,
					[],
					(_, result) => {
						resolve(result.rows._array);
					},
					(_, err) => {
						console.log("Get cars error: ", err);
						reject(err);
						return false;
					}
				);
			});
		});
	},

	saveCar(car) {
		return new Promise ((resolve, reject) => {
			db.transaction(tx => {
				tx.executeSql(`
					INSERT into cars (
						id, 
						name, 
						car_type, 
						fuel_type, 
						created_at
					)
					VALUES (?, ?, ?, ?, ?);
					`,
					[
						car.id,
						car.name,
						car.car,
						car.fuel,
						car.created_at
					],
					() => {
						resolve(true);
					},
					(_, err) => {
						console.log("save car error: ", err);
						reject(err);
						return false;
					}
				);
			});
		});
	},
	deleteAllCars() { 
		return new Promise((resolve, reject) => { 
			db.transaction(tx => { 
				tx.executeSql(
					`DELETE FROM cars;`, 
					[], 
					() => { 
						resolve(true); 
					}, 
					(_, error) => { 
						console.log("Delete cars error:", error); 
						reject(error); 
						return false; 
					} 
				); 
			}); 
		}); 
	}
}