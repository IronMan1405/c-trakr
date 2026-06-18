import React, { useState, useCallback } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useFocusEffect } from "@react-navigation/native";
import { TripService } from "../services/tripService";

const screenWidth = Dimensions.get("window").width;

const CarbonSummary = () => {
    const [graphData, setGraphData] = useState(null);
    const [totalCarbon, setTotalCarbon] = useState(0);
    const [todayCarbon, setTodayCarbon] = useState(0);

    useFocusEffect(
        useCallback(() => {
            loadSummary();
        }, [])
    );

    const loadSummary = async () => {
        try {
            const carbonSummary = await TripService.getCarbonSummary();
            const labels = carbonSummary.map(item =>
                new Date(item.created_at).toLocaleDateString('en-GB', {
                    day: 'numeric', month: 'short'
                })
            );
            const data = carbonSummary.map(item => Number(item.total_carbon) || 0);
            if (data.length === 0) {
                data.push(0);
                labels.push("--");
            }
            const total = data.reduce((sum, val) => sum + val, 0);
            const today = data[data.length - 1] || 0;
            setTotalCarbon(total.toFixed(1));
            setTodayCarbon(today.toFixed(1));
            setGraphData({ labels, datasets: [{ data }] });
        } catch (err) {
            console.error("set summary error: ", err);
        }
    };

    return (
        <View>
            <View style={styles.headerRow}>
                <View>
                    <Text style={styles.sectionLabel}>CARBON EMISSION</Text>
                    <Text style={styles.bigNum}>{todayCarbon}<Text style={styles.bigUnit}> kg</Text></Text>
                </View>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>7 days</Text>
                </View>
            </View>

            {graphData && (
                <LineChart
                    data={graphData}
                    width={screenWidth - 56}
                    height={150}
                    yAxisSuffix="kg"
                    chartConfig={chartConfig}
                    bezier
                    fromZero
                    withInnerLines={true}
                    withOuterLines={false}
                    style={styles.chart}
                />
            )}

            <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Total CO₂</Text>
                <Text style={styles.metricVal}>{totalCarbon} kg</Text>
            </View>
            <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Today</Text>
                <Text style={[styles.metricVal, styles.green]}>{todayCarbon} kg</Text>
            </View>
            <View style={[styles.metricRow, { borderBottomWidth: 0 }]}>
                <Text style={styles.metricLabel}>vs last week</Text>
                <Text style={styles.metricVal}>↓ 0%</Text>
            </View>
        </View>
    );
};

const chartConfig = {
    backgroundGradientFrom: "#1a1d27",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#1a1d27",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
    strokeWidth: 2,
    propsForDots: {
        r: "4",
        strokeWidth: "2",
        stroke: "#4ade80"
    },
    propsForBackgroundLines: {
        stroke: "#2a2d36",
        strokeWidth: 0.5,
    }
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
    chart: { marginLeft: -10, borderRadius: 8, marginBottom: 8 },
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
    green: { color: "#4ade80" },
});

export default CarbonSummary;