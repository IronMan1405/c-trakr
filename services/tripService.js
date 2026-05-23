// tripService.js

import db from "./database";

export const TripService = {
	getTripsByCarId(carId) {
		return new Promise((resolve, reject) => {
			db.transaction(tx => {
				tx.executeSql(`
					SELECT * FROM trips
					WHERE car_id = ?
                    ORDER BY created_at ASC
					`,
					[carId],
					(_, result) => {
						resolve(result.rows._array);
					},
					(_, err) => {
						console.log("Get trips error: ", err);
						reject(err);
						return false;
					}
				);
			});
		});
	},

	saveTrip(trip) {
		return new Promise ((resolve, reject) => {
			db.transaction(tx => {
				tx.executeSql(`
					INSERT into trips (
						id, 
                        car_id,
						distance, 
						fuel_used, 
						carbon_emitted, 
                        avg_speed,
						created_at
					)
					VALUES (?, ?, ?, ?, ?, ?, ?);
					`,
					[
                        trip.id,
                        trip.car_id,
                        trip.distance,
                        trip.fuel_used,
                        trip.carbon_emitted,
                        trip.avg_speed,
                        trip.created_at
					],
					() => {
						resolve(true);
					},
					(_, err) => {
						console.log("save trip error: ", err);
						reject(err);
						return false;
					}
				);
			});
		});
	},
	deleteTripsByCarId(carId) { 
		return new Promise((resolve, reject) => { 
			db.transaction(tx => { 
				tx.executeSql(
					`DELETE FROM trips
                    WHERE carId = ?`, 
					[carId], 
					() => { 
						resolve(true); 
					}, 
					(_, error) => { 
						console.log("Delete trips error:", error); 
						reject(error); 
						return false; 
					} 
				); 
			}); 
		}); 
	}
}