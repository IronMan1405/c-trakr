import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default TopNotifications = () => {
    return (
        <View>
            <View style={styles.notifBox}>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.notif}>You have earned 120 bonus points today by saving environment for 12 minutes.</Text>
            <Text style={styles.descr}>Carbon emission is not done for 12 minutes.</Text>
            </View>
        </View>
    );
}

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