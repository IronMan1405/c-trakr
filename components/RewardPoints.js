import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

export default RewardPoints = () => {
    const chartConfig = {
        backgroundGradientFrom: "#1a1d27",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#1a1d27",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    };

    const data = {
        labels: ["Today", "Total"],
        data: [0.2, 0.9]
    };

    return (
        <View style={styles.summaryBox}>
            <Text style={styles.title}>Rewards</Text>
            <Text style={styles.subtitle}>Points earned</Text>
            <ProgressChart 
                data={data}
                width={330}
                height={140}
                chartConfig={chartConfig}
                strokeWidth={16}
                radius={32}
                hideLegend={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    summaryBox: {
        backgroundColor: "#1a1d27",
        borderRadius: 16,
        padding: 14,
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ffffff",
    },
    subtitle: {
        fontSize: 12,
        color: "#666",
        marginBottom: 6,
    },
});