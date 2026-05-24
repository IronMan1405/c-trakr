import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BarGraph, LineGraph} from '../auth/charts';

import { TripService } from '../services/tripService';

const CarData = ({ route }) => {
    const car = route.params;

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        loadTrips();
    }, []);

    const loadTrips = async () => {
        try {
            const result = await TripService.getTripsByCarId(car.id);
            setTrips(result);
        } catch (err) {
            console.error("set trips error: ", err);
        }
    };

    const labels = trips.map(
        trip => new Date(trip.created_at).toLocaleDateString(
            'en-GB', 
            {day: 'numeric', month: 'short'}
        )
    );

    const distanceData = trips.map(trip => trip.distance);
    const carbonDataValues = trips.map(trip => trip.carbon_emitted); 
    const fuelDataValues = trips.map(trip => trip.fuel_used); 
    
    const totalDistance = distanceData.reduce((a, b) => a + b, 0); 
    const totalFuel = fuelDataValues.reduce((a, b) => a + b, 0); 
    const totalCarbon = carbonDataValues.reduce((a, b) => a + b, 0);

    const distanceGraph = {
        labels,
        datasets: [{
            data: distanceData
        }]
    };

    const carbonGraph = {
        labels,
        datasets: [{
            data: carbonDataValues
        }]
    };

    const fuelGraph = {
        labels,
        datasets: [{
            data: fuelDataValues
        }]
    };

    return (
        <ScrollView> 
            <View style={styles.container}> 
                <Text style={styles.titleStyle}>
                    Car Details
                </Text> 
                <Text style={styles.text}> 
                    Car Name: {car.name} 
                </Text> 
                
                <View style={styles.row}> 
                    <Text style={styles.text}> 
                        Car Type: {car.car_type} 
                    </Text> 
                    <Text style={styles.text}> 
                        Fuel Type: {car.fuel_type} 
                    </Text> 
                </View> 
                
                <View style={styles.summaryBox}> 
                    <Text style={styles.summaryText}> 
                        Total Distance: {totalDistance.toFixed(1)} km 
                    </Text> 
                    <Text style={styles.summaryText}> 
                        Fuel Used: {totalFuel.toFixed(1)} L 
                    </Text> 
                    <Text style={styles.summaryText}> 
                        Carbon Emitted: {totalCarbon.toFixed(1)} kg 
                    </Text> 
                </View> 
                
                <View style={styles.graphTitleContainer}> 
                    <Image source={require("../ct_logo.png")} style={{ height: 45, width: 45 }} /> 
                    <Text style={styles.graphTitle}> 
                        Carbon Footprint 
                    </Text> 
                </View> 
                
                {trips.length > 0 && LineGraph(carbonGraph)} 
                
                <View style={styles.graphTitleContainer}> 
                    <MaterialIcons name='mode-of-travel' size={35} color='#000' /> 
                    <Text style={styles.graphTitle}> 
                        Distance Traveled 
                    </Text> 
                </View> 
                
                {trips.length > 0 && BarGraph(distanceGraph)} 
                
                <View style={styles.graphTitleContainer}> 
                    <MaterialCommunityIcons name='fuel' size={35} color='#000' /> 
                    <Text style={styles.graphTitle}> 
                        Fuel Consumed 
                    </Text> 
                </View> 
                
                {trips.length > 0 && LineGraph(fuelGraph)} 
            </View> 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom: 30
    //   paddingVertical: 20
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        padding: 24,
    },
    text: {
        fontSize: 16
    },
    row: {
        flex: 1, 
        flexDirection: 'row', 
        paddingTop: 12, 
        paddingBottom: 35
    },
    graphTitleContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 10 
    }, 
    graphTitle: { 
        fontSize: 20, 
        marginLeft: 10 
    }, 
    summaryBox: { 
        width: '90%', 
        padding: 15, 
        marginBottom: 20, 
        borderRadius: 12, 
        backgroundColor: '#f2f2f2' 
    }, 
    summaryText: { 
        fontSize: 16, 
        marginVertical: 4 
    },
});

export default CarData;