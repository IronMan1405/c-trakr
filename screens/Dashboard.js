import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Summary from "../components/Summary";

const Dashboard = () => {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <View style={styles.headerRow}>
                    <Text style={styles.heading}>Today</Text>
                    <View style={styles.liveBadge}>
                        <Text style={styles.liveText}>Live</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>CO₂ today</Text>
                        <Text style={styles.cardVal}>0.0<Text style={styles.cardUnit}> kg</Text></Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Distance</Text>
                        <Text style={styles.cardVal}>0.0<Text style={styles.cardUnit}> km</Text></Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Points</Text>
                        <Text style={[styles.cardVal, styles.green]}>0</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Trips today</Text>
                        <Text style={styles.cardVal}>0</Text>
                    </View>
                </View>
                <Summary />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: { backgroundColor: "#0f1117" },
    container: { flex: 1, paddingHorizontal: 12, paddingTop: 10, paddingBottom: 30 },
    headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
    heading: { fontSize: 22, fontWeight: "500", color: "#ffffff" },
    liveBadge: { backgroundColor: "#1f2d1a", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 },
    liveText: { fontSize: 11, color: "#4ade80" },
    row: { flexDirection: "row", gap: 10, marginBottom: 10 },
    card: { flex: 1, backgroundColor: "#1a1d27", borderRadius: 14, padding: 16 },
    cardLabel: { fontSize: 12, color: "#666", marginBottom: 6 },
    cardVal: { fontSize: 26, fontWeight: "500", color: "#ffffff" },
    cardUnit: { fontSize: 12, color: "#666" },
    green: { color: "#4ade80" },
});

export default Dashboard;