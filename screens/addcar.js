import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Toast from "react-native-toast-message";

import { useCars } from "../MyListContext";
import { CarService } from "../services/carService";

import carsData from "../assets/data/cars.json";

const carTypes = ["Compact Car", "Mid-ranged Car", "Luxury Car"];

const AddCar = ({ navigation }) => {
    const { cars, setCars } = useCars();

    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [car, setCar] = useState("");
    const [fuel, setFuel] = useState("");
    const [values, setValues] = useState({ carAdded: "" });

    const handleSearch = (text) => {
        setSearchText(text);
        setValues({ carAdded: text });
        setFuel("");

        if (text.length < 2) {
            setSuggestions([]);
            return;
        }

        const filtered = carsData.filter(c =>
            c.name.toLowerCase().includes(text.toLowerCase())
        ).slice(0, 8);

        setSuggestions(filtered);
    };

    const handleSelect = (item) => {
        setSearchText(item.name);
        setValues({ carAdded: item.name });
        setFuel(item.fuel_type);
        setSuggestions([]);
    };

    const AddedCarDetails = async () => {
        if (car.length === 0 || fuel.length === 0 || values.carAdded.length === 0) {
            Toast.show({ type: 'error', text1: 'Error', text2: 'Please fill out all the fields.', visibilityTime: 3000, text1Style: { fontSize: 16, fontWeight: 'bold' }, text2Style: { color: '#262626', fontSize: 14 } });
            return;
        }

        const newCar = {
            id: Date.now().toString(),
            name: values.carAdded,
            fuel,
            car,
            stats: { totalDist: 0, totalFuel: 0, totalCarbon: 0 },
            trips: [],
            created_at: new Date().toISOString(),
        };

        await CarService.saveCar(newCar);
        setCars(prev => [...prev, newCar]);

        try {
            Toast.show({ type: 'success', text1: 'Success!', text2: car + " with " + fuel + " fuel added!", visibilityTime: 3000, text1Style: { fontSize: 16, fontWeight: 'bold' }, text2Style: { color: '#262626', fontSize: 14 } });
            navigation.navigate("Home");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ScrollView style={styles.screen} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <Text style={styles.heading}>Add a car</Text>

                <Text style={styles.label}>CAR NAME / MODEL</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g. Maruti Suzuki Swift"
                    placeholderTextColor="#444"
                    autoCorrect={false}
                    autoCapitalize="words"
                    value={searchText}
                    onChangeText={handleSearch}
                />

                {suggestions.length > 0 && (
                    <View style={styles.suggestionsBox}>
                        {suggestions.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.suggestionItem, index === suggestions.length - 1 && { borderBottomWidth: 0 }]}
                                onPress={() => handleSelect(item)}>
                                <Text style={styles.suggestionName}>{item.name}</Text>
                                <View style={styles.suggestionFuelBadge}>
                                    <Text style={styles.suggestionFuelText}>{item.fuel_type}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                <Text style={styles.label}>CAR TYPE</Text>
                <View style={styles.chipRow}>
                    {carTypes.map((type) => (
                        <TouchableOpacity
                            key={type}
                            style={[styles.chip, car === type && styles.chipSelected]}
                            onPress={() => setCar(type)}>
                            <Text style={[styles.chipText, car === type && styles.chipTextSelected]}>{type}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.label}>FUEL TYPE</Text>
                <View style={styles.chipRow}>
                    {["Petrol", "Diesel", "CNG", "Electric"].map((type) => (
                        <TouchableOpacity
                            key={type}
                            style={[styles.chip, fuel === type && styles.chipSelected]}
                            onPress={() => setFuel(type)}>
                            <Text style={[styles.chipText, fuel === type && styles.chipTextSelected]}>{type}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.btn} onPress={AddedCarDetails}>
                    <Text style={styles.btnText}>Add car</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: { backgroundColor: "#0f1117" },
    container: { flex: 1, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 40 },
    heading: { fontSize: 22, fontWeight: "500", color: "#ffffff", marginBottom: 20 },
    label: { fontSize: 11, color: "#555", letterSpacing: 0.5, marginBottom: 8 },
    input: {
        backgroundColor: "#1a1d27",
        borderRadius: 10,
        padding: 12,
        fontSize: 14,
        color: "#ffffff",
        borderWidth: 0.5,
        borderColor: "#2a2d36",
        marginBottom: 6,
    },
    suggestionsBox: {
        backgroundColor: "#1a1d27",
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#2a2d36",
        marginBottom: 16,
        overflow: "hidden",
    },
    suggestionItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: "#2a2d36",
    },
    suggestionName: { fontSize: 13, color: "#cccccc", flex: 1 },
    suggestionFuelBadge: {
        backgroundColor: "#1f2d1a",
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginLeft: 8,
    },
    suggestionFuelText: { fontSize: 10, color: "#4ade80" },
    chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 },
    chip: {
        backgroundColor: "#1a1d27",
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "#2a2d36",
    },
    chipSelected: { backgroundColor: "#1f2d1a", borderColor: "#4ade80" },
    chipText: { fontSize: 13, color: "#666" },
    chipTextSelected: { color: "#4ade80" },
    btn: {
        backgroundColor: "#4ade80",
        borderRadius: 12,
        padding: 14,
        alignItems: "center",
        marginTop: 10,
    },
    btnText: { fontSize: 15, fontWeight: "500", color: "#0f1117" },
});

export default AddCar;