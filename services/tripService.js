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
        return new Promise((resolve, reject) => {
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
                    `DELETE FROM trips WHERE car_id = ?`,
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
    },

    deleteAllTrips() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `DELETE FROM trips;`,
                    [],
                    () => {
                        resolve(true);
                    },
                    (_, error) => {
                        console.log("Delete all trips error:", error);
                        reject(error);
                        return false;
                    }
                );
            });
        });
    },

    getCarbonSummary() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `SELECT created_at,
                    SUM(carbon_emitted) AS total_carbon
                    FROM trips
                    GROUP BY created_at
                    ORDER BY created_at ASC;`,
                    [],
                    (_, result) => {
                        resolve(result.rows._array);
                    },
                    (_, error) => {
                        console.log("Carbon summary error:", error);
                        reject(error);
                        return false;
                    }
                );
            });
        });
    },

    getFuelSummary() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `SELECT created_at,
                    SUM(fuel_used) AS total_fuel
                    FROM trips
                    GROUP BY created_at
                    ORDER BY created_at ASC;`,
                    [],
                    (_, result) => {
                        resolve(result.rows._array);
                    },
                    (_, error) => {
                        console.log("Fuel summary error:", error);
                        reject(error);
                        return false;
                    }
                );
            });
        });
    }
};