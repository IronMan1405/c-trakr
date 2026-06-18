import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { TripService } from "../services/tripService";

const FuelSummary = () => {
    const [totalFuel, setTotalFuel] = useState(0);

    useFocusEffect(
        useCallback(() => {
            loadSummary();
        }, [])
    );

    const loadSummary = async () => {
        try {
            const fuelSummary = await TripService.getFuelSummary();
            const total = fuelSummary.reduce((sum, item) => sum + item.total_fuel, 0);
            setTotalFuel(total);
        } catch (err) {
            console.error("set summary error: ", err);
        }
    };

    return (
        <View>
            <View style={styles.headerRow}>
                <View>
                    <Text style={styles.sectionLabel}>FUEL</Text>
                    <Text style={styles.bigNum}>{totalFuel.toFixed(1)}<Text style={styles.bigUnit}> L</Text></Text>
                </View>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>Today</Text>
                </View>
            </View>

            <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Used</Text>
                <Text style={[styles.metricVal, styles.red]}>{totalFuel.toFixed(1)} L</Text>
            </View>
            <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Efficiency</Text>
                <Text style={styles.metricVal}>0.0 km/L</Text>
            </View>
            <View style={[styles.metricRow, { borderBottomWidth: 0 }]}>
                <Text style={styles.metricLabel}>Cost est.</Text>
                <Text style={[styles.metricVal, styles.red]}>₹0</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 10,
    },
    sectionLabel: { fontSize: 10, color: "#555", letterSpacing: 0.5, marginBottom: 4 },
    bigNum: { fontSize: 32, fontWeight: "500", color: "#ffffff", lineHeight: 36 },
    bigUnit: { fontSize: 14, color: "#555" },
    badge: { backgroundColor: "#1f2d1a", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 },
    badgeText: { fontSize: 10, color: "#4ade80" },
    metricRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 7,
        borderBottomWidth: 0.5,
        borderBottomColor: "#12151f",
    },
    metricLabel: { fontSize: 12, color: "#555" },
    metricVal: { fontSize: 13, fontWeight: "500", color: "#ffffff" },
    red: { color: "#f87171" },
});

export default FuelSummary;