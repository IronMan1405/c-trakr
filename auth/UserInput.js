import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Text from "@kaloraat/react-native-text";

const UserInput = ({name, value, setValue, autoCapitalize="none", keyboardType="default", secureTextEntry=false}) => {
    return (
        <View style={styles.wrap}>
            <Text semi style={styles.label}>{name}</Text>
            <TextInput
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={styles.input}
                value={value}
                placeholderTextColor="#444"
                onChangeText={(text) => setValue(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        marginHorizontal: 24,
    },
    label: {
        color: '#555',
        fontSize: 11,
        letterSpacing: 1,
        marginBottom: 4,
    },
    input: {
        borderBottomWidth: 0.5,
        height: 48,
        marginBottom: 30,
        borderBottomColor: '#2a2d36',
        color: '#ffffff',
        fontSize: 15,
    }
})

export default UserInput;