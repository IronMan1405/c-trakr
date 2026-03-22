import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "@kaloraat/react-native-text";


const SubmitButton = ({text, handleSubmit}) => (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text heavy large center color="#ffff">
                    {text}
                </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#41B6E6",
        height:50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 30,
        borderRadius: 24
    }
})



export default SubmitButton