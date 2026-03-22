import React, {useState, useContext} from "react";
import { TouchableOpacity, View, TextInput, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import {NavigationContainer} from '@react-navigation/native';

import Text from "@kaloraat/react-native-text";

import SubmitButton from "../auth/SubmitButton";
import UserInput from "../auth/UserInput";

const Signin = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");

    const handleSubmit = async () => {
        setLoading(true)
        if (!email || !password) {
            alert("Please fill out all the fields");
            setLoading(false);
            return;
        }
        try {
            navigation.navigate('Root')
            
            // {() => navigation.navigate("Signin")}
            
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
    <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center', marginBottom: 40}}>
        <Image source={require("../ct_logo.png")} style={{width: 150, height: 150}} />
        </View>
        <Text title center>Sign In</Text>

        <UserInput name="EMAIL" value={email} setValue={setEmail} autoCompleteType="email" autoCorrect={false} keyboardType="email-address"/>
        <UserInput name="PASSWORD" value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType="password" />

        <SubmitButton text="Sign in" handleSubmit={handleSubmit}/>

        <Button title="Don't have an account? Register now" type="clear" onPress={() => navigation.navigate('Sign Up')} />
    </View>
    );
}


export default Signin;