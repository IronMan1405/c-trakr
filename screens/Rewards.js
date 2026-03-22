import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Rewards = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>Your Rewards Score</Text>
            <Text style={styles.info}>Total rewards: 540 </Text>
            <Text style={styles.info}>Today rewards: 120 </Text>
            <View style={styles.social}>
                <Text>
                <Ionicons name={"logo-facebook"} size={25} style={styles.media} />
                <Ionicons name={"logo-instagram"} size={25} style={styles.media} />
                <Ionicons name={"logo-whatsapp"} size={25} style={styles.media} />
                <Ionicons name={"logo-pinterest"} size={25} style={styles.media} />
                </Text>
            
            </View>
            <Button title="Share" />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },
    info: {
        fontSize: 16,
        padding: 5
    },
    social: {
        padding: 15
    },
    media: {
        margin: 5
    }
});