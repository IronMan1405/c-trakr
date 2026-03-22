import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import TopNotifications from "../components/TopNotifications";
import Summary from "../components/Summary";
import Ads from "../components/Ads";

export default Dashboard = () => {
    let ads = [];
    return (
        <ScrollView>
        <View>
            
            <TopNotifications />
            <Summary />
            { /* 
            <FlatList
                horizontal
                data={ads}
                snapToInterval={boxWidth}
                contentInset={{
                    left: 100,
                    right: 100,
                }}
                contentOffset={{ x: 100 * -1, y: 0 }}
                onLayout={(e) => {
                    setScrollViewWidth(e.nativeEvent.layout.width);
                }}
            /> */ }
            <Ads />
            <View style={styles.featureBox}>
                <Text>Following features are provided:</Text>
                <Text>Carbon Footprint percentage</Text>
                <Text>Cars / Fuel detail</Text>
                <Text>Fuel Summary</Text>
                <Text>Reward Points</Text>
                <Text>Social Media Share</Text>
                <Text>Notifications on Rewards, Carbon Footprint, Fuel Save, Buy Discounts, etc</Text>

            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    featureBox: {
        margin: 10,
        marginBottom: 30
    }
});