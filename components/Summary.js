import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FuelSummary from "./FuelSummary";
import RewardPoints from "./RewardPoints";
import CarbonSummary from "./CarbonSummary";

export default Summary = () => {
    return (
        <View>
            <CarbonSummary/>
            <FuelSummary />
            <RewardPoints />
        </View>
    );
};

const styles = StyleSheet.create({
    notifBox: {
        margin: 10,
        borderColor: "#aaa",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#ddd"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 5,
        backgroundColor: "#999",
        borderRadius: 10
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