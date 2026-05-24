import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { TripService } from "../services/tripService";

const CarbonSummary = () => {
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        loadSummary();
    }, []);

    const loadSummary = async () => {
        try {
            const carbonSummary = await TripService.getCarbonSummary();

            const labels = carbonSummary.map(
                item => new Date(item.created_at).toLocaleDateString(
                    'en-GB', 
                    {day: 'numeric', month: 'short'}
                )
            );

            const data = carbonSummary.map(item => item.total_carbon);

            setGraphData({
                labels,
                datasets: [{
                    data: data
                }]
            });
        } catch (err) {
            console.error("set summary error: ", err);
        }
    };

    return (
        <View style={styles.summaryBox}>
            <View>
                <Text style={styles.title}>
                    Today's Carbon Emission Summary
                </Text>
            {graphData && (
                <LineChart
                    data={graphData}
                    width={360}
                    height={180}
                    yAxisLabel=""
                    yAxisInterval={2.5}
                    yAxisSuffix="kg"
                    chartConfig={styles.chartConfig}
                    bezier
                    fromZero
                />
            )}
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    summaryBox: {
        margin: 10,
        borderColor: "#aaa",
        borderWidth: 1,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 5,
    },
    notif: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 5
    },
    descr: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 5
    },
    chartConfig: {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2, // optional
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    }
});

export default CarbonSummary;