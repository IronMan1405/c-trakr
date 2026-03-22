import React, {useState} from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import {Input} from 'react-native-elements';
import { useMyList } from "../MyListContext";
import Toast from "react-native-toast-message";
import { CarService } from "../carservice";
import Icon from "react-native-vector-icons/Fontisto"


const AddCar = ({navigation}) => {
    let {myList} = useMyList();
    let {setMyList} = useMyList();
    const carType = [
        {key: "Compact Car", value: "Compact Car"},
        {key: "Mid-ranged Car", value: "Mid-ranged Car"},
        {key: "Luxury Car", value: "Luxury Car"},
    ];
    const fuelType = [
        {key: "Petrol", value: "Petrol"},
        {key: "Diesel", value: "Diesel"},
        {key: "CNG", value: "CNG"},
        {key: "Electric", value: "Electric"},
    ];
    const [car, setCar] = useState("");
    const [fuel, setFuel] = useState("");
    const [values, setValues] = useState({carAdded: ""});

    const AddedCarDetails = () => {
        // storedUser(myList);
        if (car.length === 0 || fuel.length === 0 || values.carAdded.length === 0) {
            Toast.show({type: 'error',text1: 'Error', text2: 'Please fill out all the fields.', visibilityTime: 3000, text1Style: {fontSize: 16, fontWeight: 'bold'},text2Style: {color:'#262626', fontSize:14}})
            return;
        }
        // const prevStorage = getUser();
        // console.log('prev storage: ', prevStorage);
        //myList.push({ name: values.carAdded, car: car, fuel: fuel});
        CarService.saveCar(values.carAdded, fuel, car);
        
        setMyList([].concat(myList));
        try {
            Toast.show({type: 'success',text1: 'Success!', text2: car + " with " + fuel + " fuel added! ", visibilityTime: 3000, text1Style: {fontSize: 16, fontWeight: 'bold'},text2Style: {color:'#262626', fontSize:14}});
            navigation.navigate("Home");
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {/* <Text>Add Car</Text> */}
                <Text style={styles.titleStyle} >Add a car</Text>
                <Text style={styles.textStyle}>Enter the make or model of the car</Text>
                <Input 
                        autoCorrect={false}
                        autoCapitalize="words"
                        inputContainerStyle={styles.inputStyle}
                        placeholder='Enter Car make or model' 
                        leftIcon={<Icon name="car" size={27} color='#595959' />} 
                        onChangeText={(text) => setValues({carAdded: text}) }
                        //onBlur={handleBlur}
                        defaultValue={values.carAdded} />
                <Text style={styles.textStyle}>Select the type of car you wish to add.</Text>
                    <SelectList setSelected={(carVal) => setCar(carVal)} data={carType} save="car" />

                    <Text style={styles.textStyle} >Select the type of fuel consumed by the car.</Text>
                    <SelectList setSelected={(fuelVal) => setFuel(fuelVal)} data={fuelType} save="fuel" />
                    
                        <TouchableOpacity style={styles.button} onPress={AddedCarDetails} >
                            <Text style={styles.buttonText} >Add this car.</Text>
                        </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        // padding: 15,
        marginVertical: 20,
        marginHorizontal: 12,
        // margin: 10,
    },
    button: {
        backgroundColor: "#007bff",
        // height:25,
        marginTop: 55,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 20,
        borderRadius: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
    },
    buttonText: {
        color:"#fff",
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputStyle: {
        // flex: 1,
        padding: 10,
        // margin: 10,
        borderBottomWidth: 1, 
        height: 57,  
        borderBottomColor: '#8c8c8c'
    },
})

export default AddCar;