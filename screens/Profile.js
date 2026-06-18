import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useCars } from "../MyListContext";

const Profile = () => {
    const { cars } = useCars();

    const initials = "U";
    const name = "User";
    const email = "User@email.com";

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.heading}>Profile</Text>

                <View style={styles.avatarWrap}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>{initials}</Text>
                    </View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>

                <View style={styles.statRow}>
                    <View style={styles.statCard}>
                        <Text style={styles.statVal}>{cars.length}</Text>
                        <Text style={styles.statLabel}>Cars</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statVal}>0.0</Text>
                        <Text style={styles.statLabel}>Total kg CO₂</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statVal}>0.0</Text>
                        <Text style={styles.statLabel}>Best day kg</Text>
                    </View>
                </View>

                <Text style={styles.sectionLabel}>ACCOUNT</Text>

                <TouchableOpacity style={styles.row}>
                    <Text style={styles.rowIcon}>✏️</Text>
                    <Text style={styles.rowTitle}>Edit Name</Text>
                    <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.row}>
                    <Text style={styles.rowIcon}>🔒</Text>
                    <Text style={styles.rowTitle}>Change Password</Text>
                    <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.row}>
                    <Text style={styles.rowIcon}>🗑️</Text>
                    <Text style={[styles.rowTitle, styles.danger]}>Delete Account</Text>
                    <Text style={[styles.chevron, styles.danger]}>›</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: "#0f1117" },
    container: { flex: 1, paddingHorizontal: 14, paddingTop: 10, paddingBottom: 40 },
    heading: { fontSize: 22, fontWeight: "500", color: "#ffffff", marginBottom: 20 },
    avatarWrap: { alignItems: "center", marginBottom: 24 },
    avatar: {
        width: 80, height: 80, borderRadius: 40,
        backgroundColor: "#1f2d1a",
        borderWidth: 1.5, borderColor: "#4ade8044",
        justifyContent: "center", alignItems: "center",
        marginBottom: 10,
    },
    avatarText: { fontSize: 28, fontWeight: "500", color: "#4ade80" },
    name: { fontSize: 18, fontWeight: "500", color: "#ffffff" },
    email: { fontSize: 12, color: "#555", marginTop: 4 },
    statRow: { flexDirection: "row", gap: 10, marginBottom: 20 },
    statCard: { flex: 1, backgroundColor: "#1a1d27", borderRadius: 14, padding: 14, alignItems: "center" },
    statVal: { fontSize: 22, fontWeight: "500", color: "#4ade80" },
    statLabel: { fontSize: 10, color: "#555", marginTop: 4, textAlign: "center" },
    sectionLabel: { fontSize: 11, color: "#555", letterSpacing: 0.5, marginBottom: 10 },
    row: {
        flexDirection: "row", alignItems: "center",
        backgroundColor: "#1a1d27", borderRadius: 12,
        padding: 14, marginBottom: 8,
    },
    rowIcon: { fontSize: 16, marginRight: 10 },
    rowTitle: { flex: 1, fontSize: 14, color: "#cccccc" },
    chevron: { fontSize: 18, color: "#555" },
    danger: { color: "#f87171" },
});

export default Profile;