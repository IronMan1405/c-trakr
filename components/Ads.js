import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default Ads = () => {
    return (
        <View style={styles.adBox}>
            <Text>Ads</Text>
            <Image source={require("../cas_2.jpg")} style={{width:360, height: 200}} />
        </View>
    );
};

const styles = StyleSheet.create({
    adBox: {
        padding: 10
    }
});