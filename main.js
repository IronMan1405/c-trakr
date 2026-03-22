import React from "react";
import {Button, View, StyleSheet, Text} from 'react-native';
import { storedUser, getUser } from './asyncservice';

let myArray = [{id: 1, car: 'Maruti'}, {id: 2, car: 'Toyota'}]

const Main = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text >Open up App.js to start working on your app!</Text>
            {/* <Button title="SetItem" onPress={() => storedUser(myArray)} /> */}
            {/* <Button title="GetItem" onPress={() => getUser()} />   */}
            <Button title='Go To Home' onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Main;