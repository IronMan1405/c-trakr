import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default CarbonSummary = () => {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    const data = {
        labels: ["6-7 a.m.", "7-8 a.m.", "8-9 a.m.", "9-10 a.m.", "10-11 a.m."],
        datasets: [
        {
            data: [0, 0, 2.8, 10, 4.3],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
        ],};
    return (
        <View style={styles.summaryBox}>
            <View>
                <Text style={styles.title}>Today's Carbon Emission Summary</Text>
            <LineChart 
                data={data}
                width={360}
                height={180}
                yAxisLabel=""
                yAxisInterval={2.5}
                yAxisSuffix="kg"
                chartConfig={chartConfig}
                bezier
                fromZero
            />
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
    }
});