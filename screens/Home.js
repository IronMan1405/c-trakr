import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useCars } from "../MyListContext";
import { CarService } from "../services/carService";
import Fontisto from "react-native-vector-icons/Fontisto";
import Toast from "react-native-toast-message";

const Home = ({ navigation }) => {
    const { cars, setCars } = useCars();
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    const getCars = async () => {
        const cars = await CarService.getCars();
        setCars(cars);
    };

    useEffect(() => {
        getCars();
    }, []);

    const refreshCars = () => {
        getCars();
        Toast.show({ type: 'success', text1: 'Success', text2: "Refreshed screen", visibilityTime: 3000, text1Style: { fontSize: 16, fontWeight: 'bold' }, text2Style: { color: '#262626', fontSize: 14 } });
    };

    const confirmDelete = (car) => {
        setSelectedCar(car);
        setDeleteVisible(true);
    };

    const handleDelete = async () => {
        if (!selectedCar) return;
        await CarService.deleteCar(selectedCar.id);
        setCars(prev => prev.filter(c => c.id !== selectedCar.id));
        setDeleteVisible(false);
        setSelectedCar(null);
        Toast.show({ type: 'success', text1: 'Deleted', text2: `${selectedCar.name} removed`, visibilityTime: 3000, text1Style: { fontSize: 16, fontWeight: 'bold' }, text2Style: { color: '#262626', fontSize: 14 } });
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.headerRow}>
                    <Text style={styles.heading}>My Cars</Text>
                    <View style={styles.iconRow}>
                        <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('Add Car')}>
                            <Fontisto name="plus-a" size={16} color="#0f1117" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => refreshCars()} style={styles.refreshBtn}>
                            <Fontisto name="spinner-refresh" size={18} color="#555" />
                        </TouchableOpacity>
                    </View>
                </View>

                {cars.length === 0 && (
                    <View style={styles.emptyCard}>
                        <Text style={styles.emptyText}>No cars yet. Tap + to add one.</Text>
                    </View>
                )}

                {cars.map((car, index) => (
                    <View key={index + '_car'} style={styles.carCard}>
                        <TouchableOpacity
                            style={styles.carMain}
                            onPress={() => navigation.navigate('Car Details', cars[index])}>
                            <View style={styles.carIcon}>
                                <Fontisto name="car" size={18} color="#4ade80" />
                            </View>
                            <View style={styles.carInfo}>
                                <Text style={styles.carName}>{car.name}</Text>
                                <Text style={styles.carSub}>{car.fuel_type} · {car.car_type}</Text>
                            </View>
                            <Fontisto name="angle-right" size={12} color="#555" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteBtn} onPress={() => confirmDelete(car)}>
                            <Fontisto name="trash" size={14} color="#f87171" />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <Modal
                transparent
                visible={deleteVisible}
                animationType="fade"
                onRequestClose={() => setDeleteVisible(false)}>
                <View style={styles.overlay}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Remove car?</Text>
                        <Text style={styles.modalSub}>Are you sure you want to remove {selectedCar?.name}?</Text>
                        <View style={styles.modalBtns}>
                            <TouchableOpacity style={styles.cancelBtn} onPress={() => setDeleteVisible(false)}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.confirmBtn} onPress={handleDelete}>
                                <Text style={styles.confirmText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: { backgroundColor: "#0f1117" },
    container: { flex: 1, paddingHorizontal: 12, paddingTop: 10, paddingBottom: 30 },
    headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
    heading: { fontSize: 22, fontWeight: "500", color: "#ffffff" },
    iconRow: { flexDirection: "row", alignItems: "center", gap: 10 },
    addBtn: { backgroundColor: "#4ade80", borderRadius: 10, width: 34, height: 34, justifyContent: "center", alignItems: "center" },
    refreshBtn: { backgroundColor: "#1a1d27", borderRadius: 10, width: 34, height: 34, justifyContent: "center", alignItems: "center" },
    emptyCard: { backgroundColor: "#1a1d27", borderRadius: 14, padding: 20, alignItems: "center" },
    emptyText: { fontSize: 13, color: "#555" },
    carCard: { backgroundColor: "#1a1d27", borderRadius: 14, marginBottom: 10, overflow: "hidden" },
    carMain: { flexDirection: "row", alignItems: "center", gap: 12, padding: 14 },
    carIcon: { backgroundColor: "#12151f", borderRadius: 10, width: 40, height: 40, justifyContent: "center", alignItems: "center" },
    carInfo: { flex: 1 },
    carName: { fontSize: 15, fontWeight: "500", color: "#ffffff", marginBottom: 3 },
    carSub: { fontSize: 12, color: "#666" },
    deleteBtn: { borderTopWidth: 0.5, borderTopColor: "#2a2d36", padding: 10, alignItems: "center" },
    overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", alignItems: "center" },
    modal: { backgroundColor: "#1a1d27", borderRadius: 16, padding: 24, width: "80%" },
    modalTitle: { fontSize: 18, fontWeight: "600", color: "#ffffff", marginBottom: 8 },
    modalSub: { fontSize: 13, color: "#666", marginBottom: 24 },
    modalBtns: { flexDirection: "row", gap: 10 },
    cancelBtn: { flex: 1, backgroundColor: "#12151f", borderRadius: 10, padding: 12, alignItems: "center" },
    cancelText: { fontSize: 14, color: "#666" },
    confirmBtn: { flex: 1, backgroundColor: "#2d1a1a", borderRadius: 10, padding: 12, alignItems: "center" },
    confirmText: { fontSize: 14, color: "#f87171", fontWeight: "500" },
});

export default Home;