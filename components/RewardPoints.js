import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

export default RewardPoints = () => {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    const data = {
        labels: ["Today", "Total"],
        data: [0.2, 0.9]
    };
    return (
        <View style={styles.summaryBox}>
            <View>
                <Text style={styles.title}>Reward Points Summary</Text>
            {
            <ProgressChart 
                data={data}
                width={360}
                height={150}
                chartConfig={chartConfig}
                strokeWidth={16}
                radius={32}
                hideLegend={false}
            /> 
            }
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