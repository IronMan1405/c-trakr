import React, {useState} from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
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
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoWrap}>
                <Image source={require("../assets/ct_logo.png")} style={styles.logo} />
            </View>
            <Text title center style={styles.heading}>Sign In</Text>
            <UserInput name="EMAIL" value={email} setValue={setEmail} autoCompleteType="email" autoCorrect={false} keyboardType="email-address"/>
            <UserInput name="PASSWORD" value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType="password" />
            <SubmitButton text="Sign in" handleSubmit={handleSubmit}/>
            <Button title="Don't have an account? Register now" type="clear" onPress={() => navigation.navigate('Sign Up')} titleStyle={styles.registerLink}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0f1117',
        paddingTop: 60,
    },
    logoWrap: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 24,
    },
    heading: {
        color: '#ffffff',
        marginBottom: 16,
    },
    registerLink: {
        color: '#4ade80',
        fontSize: 14,
    }
});

export default Signin;