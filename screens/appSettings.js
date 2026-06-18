import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

const Settings = ({ navigation }) => {
    const [logoutVisible, setLogoutVisible] = useState(false);

    const handleLogout = () => {
        setLogoutVisible(false);
        navigation.getParent()?.navigate('Sign In');
    };

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.row} onPress={() => navigation.getParent()?.navigate('Profile')}>
                    <Text style={styles.rowIcon}>👤</Text>
                    <Text style={styles.rowTitle}>Profile</Text>
                    <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.row}>
                    <Text style={styles.rowIcon}>⚙️</Text>
                    <Text style={styles.rowTitle}>Preferences</Text>
                    <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.row}>
                    <Text style={styles.rowIcon}>📄</Text>
                    <Text style={styles.rowTitle}>Report</Text>
                    <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.row}>
                    <Text style={styles.rowIcon}>❓</Text>
                    <Text style={styles.rowTitle}>Help</Text>
                    <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.row}>
                    <Text style={styles.rowIcon}>ℹ️</Text>
                    <Text style={styles.rowTitle}>About</Text>
                    <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.logoutRow}
                    onPress={() => setLogoutVisible(true)}>
                    <Text style={styles.rowIcon}>🚪</Text>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent
                visible={logoutVisible}
                animationType="fade"
                onRequestClose={() => setLogoutVisible(false)}>
                <View style={styles.overlay}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Log out?</Text>
                        <Text style={styles.modalSub}>Are you sure you want to log out?</Text>
                        <View style={styles.modalBtns}>
                            <TouchableOpacity
                                style={styles.cancelBtn}
                                onPress={() => setLogoutVisible(false)}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.confirmBtn}
                                onPress={handleLogout}>
                                <Text style={styles.confirmText}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: "#0f1117" },
    container: { flex: 1, paddingHorizontal: 12, paddingTop: 10 },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 14,
        backgroundColor: "#1a1d27",
        borderRadius: 12,
        marginBottom: 8,
    },
    rowIcon: { fontSize: 16, marginRight: 12 },
    rowTitle: { flex: 1, fontSize: 14, color: "#cccccc" },
    chevron: { fontSize: 20, color: "#555" },
    logoutRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 14,
        backgroundColor: "#1a1d27",
        borderRadius: 12,
        marginTop: 8,
    },
    logoutText: { fontSize: 14, color: "#f87171" },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "#1a1d27",
        borderRadius: 16,
        padding: 24,
        width: "80%",
    },
    modalTitle: { fontSize: 18, fontWeight: "600", color: "#ffffff", marginBottom: 8 },
    modalSub: { fontSize: 13, color: "#666", marginBottom: 24 },
    modalBtns: { flexDirection: "row", gap: 10 },
    cancelBtn: {
        flex: 1,
        backgroundColor: "#12151f",
        borderRadius: 10,
        padding: 12,
        alignItems: "center",
    },
    cancelText: { fontSize: 14, color: "#666" },
    confirmBtn: {
        flex: 1,
        backgroundColor: "#2d1a1a",
        borderRadius: 10,
        padding: 12,
        alignItems: "center",
    },
    confirmText: { fontSize: 14, color: "#f87171", fontWeight: "500" },
});

export default Settings;