import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useCars } from "../MyListContext";
import { ListItem } from "react-native-elements";
import { CarService } from "../services/carService";
import Icon from "react-native-vector-icons/Fontisto";
import Fontisto from "react-native-vector-icons/Fontisto";
import Toast from "react-native-toast-message";

const Home = ({navigation}) => {
    const { cars, setCars } = useCars();

    const getCars = async () => {
        const cars = await CarService.getCars();
        setCars(cars);
    };
    useEffect(() => {
        getCars();
    }, []);
    const refreshCars = () => {
        getCars();
        Toast.show({type: 'success',text1: 'Success', text2: "Refreshed screen", visibilityTime: 3000, text1Style: {fontSize: 16, fontWeight: 'bold'},text2Style: {color:'#262626', fontSize:14}});
    };

    return (
        <ScrollView style={styles.backgroundscreen}>
            <View>
                {/* <Text>Home</Text> */}
                <View style={{flex: 0.25, flexDirection: 'row', justifyContent: "center",}} >
                    <View style={styles.iconView} >
                        <Icon.Button name='plus-a' onPress={() => navigation.navigate('Add Car')} style={styles.iconButton}>
                            <Text style={styles.buttonText}>
                                Add Car
                            </Text>
                        </Icon.Button>
                    </View>
                
                    <TouchableOpacity onPress={() => refreshCars()}>
                        <Fontisto name="spinner-refresh" size={35} style={{paddingTop: 35}} />
                    </TouchableOpacity>
                </View>

                {cars.map((car, index) => (
                    // <Text key={index}>{car.name} - {car.fuel}</Text>
                    <ListItem
                    key={index+'_car'}
                    topDivider
                    bottomDivider
                    onPress={() => navigation.navigate('Car Details', cars[index])}>
                        <ListItem.Chevron/>
                        <ListItem.Content>
                            <ListItem.Title>{car.name}</ListItem.Title>
                            <ListItem.Subtitle>Car Type: {car.car_type}</ListItem.Subtitle>
                            <ListItem.Subtitle>Fuel Type: {car.fuel_type}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
     backgroundColor: "#07bff",
     height: 75,
     shadowRadius: 5,
     justifyContent: "center",
     margin: 20,
     borderRadius: 20,
     padding: 15,
     shadowColor: "#000",   
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.7,
    
      
    },
    iconView: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#007bff",
        margin: 20,
        // padding: 30
    },
    iconButton: {
        padding: 20,
        paddingHorizontal: 65,
        borderRadius: 100,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        alignItems: 'center',
    },
    backgroundscreen:{  
    backgroundColor: ''
    }
});

export default Home;
