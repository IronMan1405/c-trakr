import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

export default FuelSummary = () => {
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
    const data = [
        {
            name: "Used Fuel",
            used: 4,
            color: "rgb(255, 0, 0)",
            legendFontColor: "#7f7f7f",
            legendFontSize: 15
        },
        {
            name: "Not Run",
            used: 20,
            color: "rgb(0, 255, 0)",
            legendFontColor: "#7f7f7f",
            legendFontSize: 15
        }
    ];
    return (
        <View style={styles.summaryBox}>
            <View>
                <Text style={styles.title}>Today's Fuel Summary</Text>
            <PieChart 
                data={data}
                width={400}
                height={150}
                chartConfig={chartConfig}
                accessor={"used"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 5]}
                absolute
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