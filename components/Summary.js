import React from "react";
import { View, StyleSheet } from "react-native";
import FuelSummary from "./FuelSummary";
import CarbonSummary from "./CarbonSummary";

export default Summary = () => {
    return (
        <View style={styles.card}>
            <CarbonSummary />
            <View style={styles.divider} />
            <FuelSummary />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1a1d27",
        borderRadius: 16,
        padding: 14,
        marginBottom: 12,
    },
    divider: {
        height: 0.5,
        backgroundColor: "#2a2d36",
        marginVertical: 14,
    }
});