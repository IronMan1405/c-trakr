import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-toast-message";
import Text from "@kaloraat/react-native-text";
import SubmitButton from "../auth/SubmitButton";
import UserInput from "../auth/UserInput";

const Signup = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");

    const handleSubmit = async () => {
        setLoading(true);
        if (!name || !email || !password) {
            alert("Please fill out all the fields");
            setLoading(false);
            return;
        }
        try {
            Toast.show({ type: 'success', text1: 'Success', text2: "Signed up Successfully", position: "top" });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.container}>
            <Text title center style={styles.heading}>Create Account</Text>
            <UserInput name="NAME" value={name} setValue={setName} autoCapitalize="words" autoCorrect={false} />
            <UserInput name="EMAIL" value={email} setValue={setEmail} autoCompleteType="email" autoCorrect={false} keyboardType="email-address" />
            <UserInput name="PASSWORD" value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType="password" />
            <SubmitButton text="Sign Up" handleSubmit={handleSubmit} />
            <Button
                title="Already have an account? Sign in"
                type="clear"
                onPress={() => navigation.navigate('Sign In')}
                titleStyle={styles.signinLink} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0f1117',
        paddingTop: 60,
    },
    heading: {
        color: '#ffffff',
        marginBottom: 16,
    },
    signinLink: {
        color: '#4ade80',
        fontSize: 14,
    }
});

export default Signup;