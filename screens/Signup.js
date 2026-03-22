import React, {useState, useContext} from "react";
import { TouchableOpacity, View, TextInput, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import {NavigationContainer} from '@react-navigation/native';
import Toast from "react-native-toast-message";

import Text from "@kaloraat/react-native-text";

import SubmitButton from "../auth/SubmitButton";
import UserInput from "../auth/UserInput";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");

    const handleSubmit = async () => {
        setLoading(true)
        if (!name || !email || !password) {
            alert("Please fill out all the fields");
            setLoading(false);
            return;
        }
        try {
            Toast.show({type: 'success', text1:'Success', text2: "Signed up Successfully", position: "top"});
            
            // {() => navigation.navigate("Signin")}
            
        }
        catch (err) {
            console.log(err)
        }
    }


    return (

    <View style={{flex: 1, justifyContent: 'center'}}>
        
        <Text title center>Sign Up</Text>

        <UserInput name="NAME" value={name} setValue={setName} autoCapitalize="words" autoCorrect={false}/>
        <UserInput name="EMAIL" value={email} setValue={setEmail} autoCompleteType="email" autoCorrect={false} keyboardType="email-address"/>
        <UserInput name="PASSWORD" value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType="password" />

        <SubmitButton text="Sign Up" handleSubmit={handleSubmit}/>
    </View>
    );
}


export default Signup;