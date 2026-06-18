import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BarGraph, LineGraph } from '../auth/charts';
import { TripService } from '../services/tripService';

const CarData = ({ route }) => {
    const car = route.params;
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        loadTrips();
    }, []);

    const loadTrips = async () => {
        try {
            const result = await TripService.getTripsByCarId(car.id);
            setTrips(result);
        } catch (err) {
            console.error("set trips error: ", err);
        }
    };

    const labels = trips.map(trip =>
        new Date(trip.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
    );

    const distanceData = trips.map(trip => trip.distance);
    const carbonDataValues = trips.map(trip => trip.carbon_emitted);
    const fuelDataValues = trips.map(trip => trip.fuel_used);

    const totalDistance = distanceData.reduce((a, b) => a + b, 0);
    const totalFuel = fuelDataValues.reduce((a, b) => a + b, 0);
    const totalCarbon = carbonDataValues.reduce((a, b) => a + b, 0);

    const distanceGraph = { labels, datasets: [{ data: distanceData }] };
    const carbonGraph = { labels, datasets: [{ data: carbonDataValues }] };
    const fuelGraph = { labels, datasets: [{ data: fuelDataValues }] };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.carName}>{car.name}</Text>
                <View style={styles.pillRow}>
                    <View style={styles.pill}><Text style={styles.pillText}>{car.fuel_type}</Text></View>
                    <View style={styles.pill}><Text style={styles.pillText}>{car.car_type}</Text></View>
                </View>

                <View style={styles.statRow}>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Distance</Text>
                        <Text style={styles.statVal}>{totalDistance.toFixed(1)}<Text style={styles.statUnit}> km</Text></Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Fuel used</Text>
                        <Text style={styles.statVal}>{totalFuel.toFixed(1)}<Text style={styles.statUnit}> L</Text></Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Carbon</Text>
                        <Text style={[styles.statVal, styles.green]}>{totalCarbon.toFixed(1)}<Text style={styles.statUnit}> kg</Text></Text>
                    </View>
                </View>

                <View style={styles.graphCard}>
                    <Text style={styles.graphTitle}>Carbon Footprint</Text>
                    {trips.length > 0 ? LineGraph(carbonGraph) : <Text style={styles.noData}>No data yet</Text>}
                </View>

                <View style={styles.graphCard}>
                    <Text style={styles.graphTitle}>Distance Traveled</Text>
                    {trips.length > 0 ? BarGraph(distanceGraph) : <Text style={styles.noData}>No data yet</Text>}
                </View>

                <View style={styles.graphCard}>
                    <Text style={styles.graphTitle}>Fuel Consumed</Text>
                    {trips.length > 0 ? LineGraph(fuelGraph) : <Text style={styles.noData}>No data yet</Text>}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: { backgroundColor: "#0f1117" },
    container: { flex: 1, paddingHorizontal: 12, paddingTop: 14, paddingBottom: 30 },
    carName: { fontSize: 22, fontWeight: "500", color: "#ffffff", marginBottom: 10 },
    pillRow: { flexDirection: "row", gap: 8, marginBottom: 14 },
    pill: { backgroundColor: "#1f2d1a", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4 },
    pillText: { fontSize: 12, color: "#4ade80" },
    statRow: { flexDirection: "row", gap: 8, marginBottom: 14 },
    statCard: { flex: 1, backgroundColor: "#1a1d27", borderRadius: 12, padding: 12 },
    statLabel: { fontSize: 11, color: "#666", marginBottom: 4 },
    statVal: { fontSize: 16, fontWeight: "500", color: "#ffffff" },
    statUnit: { fontSize: 10, color: "#666" },
    green: { color: "#4ade80" },
    graphCard: { backgroundColor: "#1a1d27", borderRadius: 14, padding: 14, marginBottom: 12 },
    graphTitle: { fontSize: 14, fontWeight: "500", color: "#ffffff", marginBottom: 10 },
    noData: { fontSize: 13, color: "#555", textAlign: "center", paddingVertical: 20 },
});

export default CarData;