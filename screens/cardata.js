import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BarGraph, LineGraph} from '../auth/charts';

const CarData = (navigation) => {
    console.log("my log: ", navigation.route.params);
    let data = navigation.route.params;

    // let today = new Date().getDate();
    // let month = new Date().getMonth();
    // let year = new Date().getFullYear();

    // console.log('date today ', today, '-', month, '-', year);
    
    
    console.log('dists = ', dists);
    
    let graphData = {
        labels: ["9-Apr", "10-Apr", "11-Apr", "Yesterday", "Today"],
        datasets: [{data: [2, 4.5, 3, 8, 4]}]
    };
    let dists = graphData.datasets;
    let carbonData = {datasets: [{data: [2*2.68, 4.5*2.68, 3*2.68, 8*2.68, 4*2.68]}]};

    return (
        <ScrollView>
            
            <View style={styles.container} >
                {/* Car Details */}
                <Text style={styles.titleStyle}>Car details</Text>
                <Text style={styles.text}>Car name: {data.name}</Text>
                <View style={{flex: 1, flexDirection: 'row', paddingTop: 12, paddingBottom: 35}} >
                    <Text style={{paddingRight: 15, fontSize: 16}}>Car Type: {data.car_type}</Text>
                    <Text style={styles.text}>Car Fuel Type: {data.fuel_type}</Text>
                </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}} >
                        <Image source={require("../ct_logo.png")} style={{height: 45, width: 45}} />
                        <Text style={{fontSize: 20}} > Carbon Footprint Emitted</Text>
                    </View>
                    {LineGraph(carbonData)}

                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}} >
                        <MaterialIcons name='mode-of-travel' size={35} color='#000'/>
                        <Text style={{fontSize: 20}} > Distance Traveled</Text>
                    </View>

                    {BarGraph(graphData)}

                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}} >
                        <MaterialCommunityIcons name='fuel' size={35} color='#000' />
                        <Text style={{fontSize: 20}} > Fuel Consumed</Text>
                    </View>
                    {LineGraph(graphData)}
            </View>
        </ScrollView>
    );
};
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
});

export default CarData;