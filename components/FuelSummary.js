import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

import { TripService } from "../services/tripService";

const FuelSummary = () => {
    const [chartData, setChartData] = useState(null);
    
    useEffect(() => {
        loadSummary();
    }, []);
    
    const loadSummary = async () => {
        try {
            const fuelSummary = await TripService.getFuelSummary();

            const labels = fuelSummary.map(
                item => new Date(item.created_at).toLocaleDateString(
                    'en-GB', 
                    {day: 'numeric', month: 'short'}
                )
            );

            const totalFuel = fuelSummary.reduce((sum, item) => sum + item.total_fuel, 0);

            setChartData([
                {
                    name: "Used Fuel",
                    used: totalFuel,
                    color: "rgb(255, 0, 0)",
                    legendFontColor: "#7f7f7f",
                    legendFontSize: 15
                },
                {
                    name: "Not Run",
                    used: Math.max(1, 50-totalFuel),
                    color: "rgb(0, 255, 0)",
                    legendFontColor: "#7f7f7f",
                    legendFontSize: 15
                }
            ]);
        } catch (err) {
            console.error("set summary error: ", err);
        }
    };

    return (
        <View style={styles.summaryBox}>
            <View>
                <Text style={styles.title}>Today's Fuel Summary</Text>
            {chartData && (
                <PieChart 
                    data={chartData}
                    width={400}
                    height={150}
                    chartConfig={styles.chartConfig}
                    accessor={"used"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[5, 5]}
                    absolute
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
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    }
});

export default FuelSummary;